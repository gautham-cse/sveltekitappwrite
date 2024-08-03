<!-- © Airbase Corp 2024 -->
<!-- App.svelte  -->

<svelte:head>
    <title>App | Login</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

<script>
    import './styles/app.css'
    import { onMount } from 'svelte'
    import { user } from '$lib/user'
    import { goto } from '$app/navigation'
    import { account } from '$lib/appwrite';

    // @ts-ignore
    let formError = null
    let isDialogOpen = false
    let isLoading = false 

    // @ts-ignore
    const airbase_login = async (e) => {
        e.preventDefault()
        const form = e.target
        isLoading = true 
        const formData = Object.fromEntries( /** @type Record<string, string | undefined> */
            new FormData(form).entries()
        )
        const { email, password } = formData
        if (!email || !password) {
            formError = 'Please fill out all fields'
            isDialogOpen = true
            return
        }
        try {
            await user.login(email, password)
            console.clear()
            goto('/chat')
        } catch (e) {
            alert(e)
            // formError = 'Login failed. Please try again'
            isDialogOpen = true
        }
        finally {
            isLoading = false 
        }
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
        }
        catch(e) {}
    }

    function __handleMagicURL() {
        goto('/magic-url')
    }

    onMount(() => {
        checkStatus()
        // @ts-ignore
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
</script>

<div class="a-0">
    <div class="a-1 0-x">
        <div class="a-2--x">
            <div>
                
                <div>
                    <h2 class="a-3--x">Secure Messenger +</h2>
                    <p class="a-3--y">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                </div>

                <div class="a-google__auth" style="margin-bottom: 20px">
                    <button type="button" id="app-submit--signInWithGoogleAuth" on:click={__handleMagicURL}>Login with Magic URL</button>
                    <div class="a-3--divider" style="display: flex; justify-content: center; width: 100%; font-size: 12px;"><hr style="width: 35%;"> or <hr style="width: 35%;"></div>
                </div>

                <form on:submit|preventDefault={airbase_login}>
                    <div class="a-3--z"><input placeholder="Email Address" type="email" class="app-input--email" draggable="false" id="app-uemail" name="email" autocomplete="off" spellcheck="false"/></div>
                    <div class="a-3--z"><input type="password" placeholder="Enter Password" name="password" class="app-input--password" minlength="8"/></div>
                    <div class="a-3--alpha"><div class="a-3-al--left"><a href="/register">New here? Register</a></div><div class="a-3-al--right"><a href="/forgot">Forgot Password?</a></div></div>
                    <button class="a-3--submitBtn" type="submit" disabled={isLoading}>Continue</button>
                </form>

                <div style="display:flex; justify-content: center; margin-top: -10px;"><p class="app-ftrnt"></p></div>
            </div>
        </div>

        <div class="a-2--y"></div>
        <div class="a-4">
        {#if isDialogOpen}
            <div class="dialog-overlay">
                <div class="dialog" role="dialog" aria-modal="true">
                    Please fill all the fields to continue
                    <button on:click={closeDialog}>Close</button>
                </div>
            </div>
        {/if}
        </div>
    </div>
</div>