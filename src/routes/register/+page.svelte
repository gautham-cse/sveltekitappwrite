<!-- App.svelte  -->

<svelte:head>
    <title>App | Register</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<script>
    // @ts-nocheck
    import '../styles/app.css'
    import { onMount } from 'svelte'
    import { user } from '$lib/user'
    import { goto } from '$app/navigation';
  import { account } from '$lib/appwrite';

    /* @type {string|null} */
    let formError = null 
    let isDialogOpen = false
    let isLoading = false 

    function sanitizeUsername(username) {
        let sanitized = username.replace(/\s+/g,'_')
        sanitized = sanitized.replace(/[^a-zA-Z0-9_]/g, '')
        return sanitized
    }
    function validateUsername(username) {
        if (username.length < 6) {
            return 'Username must be at least 6 characters long'
        }
        return username.match(/[^a-zA-Z0-9_]/) ? 'Username contains invalid characters' : ''
    }

    $: usernameError = validateUsername(name)
    // @ts-ignore
    const airbase_register = async (e) => {
        e.preventDefault()
        const form = (e.target)
        isLoading = true 

        const formData = /** @type Record<string, string | undefined> */ (
            Object.fromEntries(new FormData(form).entries())
        );

        let {email, password, name} = formData
        
        name = sanitizeUsername(name)
        if (!email || !password || !name) {
            formError = 'Please fill out fields'
            isDialogOpen = true
            isLoading = false 
            return
        }
        try {
            await user.register(email, password, name)
            await user.logout()
            goto('/')
        }
        catch(e) {
            alert(`We couldn\'t complete your registration. Please ensure all fields are correct and try again. \nAlso check this - ${e}`)
            window.location.reload()
        }
        finally {
            isLoading = false 
        }
    }

    /* async function checkStatus() {
        try {
            const resp = await account.get()
            if (resp) {
                goto('/chat')
            }
        } catch(e) {}
    } */

    // @ts-ignore
    function closeDialog() { 
        isDialogOpen = false 
    }
    onMount(() => {
        // checkStatus()
        // @ts-ignore
        function handleKeydown(e){ 
            if (e.key === 'Escape') { 
                closeDialog() 
            } 
        }
        window.addEventListener('keydown', handleKeydown)
        return () => { 
            window.removeEventListener('keydown', handleKeydown)
        }
    })

    function handleContextMenu(e) {
        e.preventDefault()
    }
</script>

<div class="a-0" on:contextmenu={handleContextMenu} aria-label="Disable right-click context menu" role="button" tabindex="0">
    <div class="a-1 0-x">
        <div class="a-2--x">
            <div>
                <div>
                    <h2 class="a-3--x">Secure Messenger +</h2>
                    <p class="a-3--y">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                </div>
                <div class="a-google__auth" style="margin-bottom: 20px"></div>
                <form on:submit={airbase_register}>
                    <div class="a-3--z"><input placeholder="Username" type="text" class="app-input--username" draggable="false" id="app-name" name="name" autocomplete="off" spellcheck="false"/></div>
                    <div class="a-3--z"><input placeholder="Email Address" type="email" class="app-input--email" draggable="false" id="app-uemail" name="email" autocomplete="off" spellcheck="false"/></div>
                    <div class="a-3--z"><input placeholder="Enter Password" type="password" name="password" class="app-input--password"/></div>
                    <div class="a-3--alpha"><div class="a-3-al--left"><a href="/">Have account? Login</a></div><div class="a-3-al-right"></div></div>
                    <!-- <div class="cf-turnstile" data-sitekey="0x4AAAAAAAgaLk4bCAi6Hk41" data-callback="javascriptCallback"></div> -->
                    <button class="a-3--submitBtn" type="submit" disabled={isLoading}>
                        {#if isLoading}
                            <div class="load"></div>
                        {:else}
                            {'Continue ->'}
                        {/if}
                    </button>
                </form>
                <div style="display:flex; justify-content: center; margin-top: -10px;"><p class="app-ftrnt"></p></div>
            </div>
        </div>

        <div class="a-2--y"></div>
        <div class="a-4">
        {#if isDialogOpen}
            <div class="dialog-overlay">
                <div class="dialog">
                    Please fill all the fields to continue
                    <button on:click={closeDialog}>Close</button>
                </div>
            </div>
        {/if}
        </div>
    </div>
</div>