<!-- Register.Svelte -->

<svelte:head>
    <title>App | Magic URL</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<script>
    // @ts-nocheck
    import '../styles/app.css'
    import { account, ID } from '$lib/appwrite'
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    
    let isLoading = false 
    let isDialogOpen = false 

    const sendMagicUrl = async (e) => {
        isLoading = true 
        e.preventDefault()

        const form = e.target 
        const formData = Object.fromEntries(/** @type Record<string, string | undefined>*/
            new FormData(form).entries()
        )

        const { email } = formData 
        if (!email) {
            isDialogOpen = true
            isLoading = false 
            return 
        }
        try {
            await account.createMagicURLToken(ID.unique(), email, 'https://sveltekitappwrite-j8f.pages.dev/')
            alert('Magic Link successfully sent. Please check your inbox.')
            goto('/')
        }
        catch(e) {
            alert('Failed to send magic link: ', e)
        }
        finally { isLoading = false }
    }

    function closeDialog() {
        isDialogOpen = false 
    }

    async function checkStatus() {
        try {
            const resp = await account.get()
            if (resp) {
                goto('/chat')
            }
        } catch(e) {
        }
    }

    onMount(() => {
        checkStatus()
        function handleKeydown(e) {
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
                    <p class="a-3--y">Please enter your email and check inbox to SignIn</p>
                </div>
                <form on:submit|preventDefault={sendMagicUrl}>
                    <div class="a-3--z"><input placeholder="Email Address" type="email" class="app-input--email" draggable="false" id="app-uemail" name="email" autocomplete="off" spellcheck="false"/></div>
                    <div class="a-3--alpha"><div class="a-3-al--left"><a href="/">Go Back</a></div></div>
                    <!-- <div class="cf-turnstile" data-sitekey="0x4AAAAAAAgaLk4bCAi6Hk41" data-callback="javascriptCallback"></div> -->
                    <button class="a-3--submitBtn" type="submit" disabled={isLoading}>
                        {#if isLoading}
                            <div class="load"></div>
                        {:else}
                            {'Send Magic Link ->'}
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