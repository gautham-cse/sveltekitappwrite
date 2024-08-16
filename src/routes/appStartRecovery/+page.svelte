<!-- App.svelte  -->

<svelte:head>
    <title>App | Password Recovery</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</svelte:head>

<script>
    // @ts-nocheck
    import '../styles/app.css';
    import { onMount } from 'svelte';
    import { user } from '$lib/user';
    import { goto } from '$app/navigation';
    import { account } from '$lib/appwrite';

    /* @type {string|null} */
    let formError = null;
    let isDialogOpen = false;

    function isStrongPassword(password) {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return password.length >= minLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
    }

    // @ts-ignore
    const appStartRecovery = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = /** @type Record<string, string | undefined> */ (
            Object.fromEntries(new FormData(form).entries())
        );

        let { password, confirmpassword } = formData;

        if (!password || !confirmpassword) {
            formError = 'Please fill out all the fields.';
            isDialogOpen = true;
            return;
        }
        if (password !== confirmpassword) {
            formError = 'Passwords don\'t match.';
            isDialogOpen = true;
            return;
        }
        if (password.length < 8 || confirmpassword.length < 8) {
            formError = 'Password must be greater than 8 characters'
            isDialogOpen = true 
            return 
        }
        if (!isStrongPassword(password) || !isStrongPassword(confirmpassword)) {
            alert('Password is too weak. Ensure it has at least 8 characters, including uppercase, lowercase, a number, and a special character.')
            return
        }
        const urlParams = new URLSearchParams(window.location.search)
        const secret = urlParams.get('secret')
        const userId = urlParams.get('userId')
        try {
            const user = await account.updateRecovery(userId, secret, password, confirmpassword)
            alert('Password changed successfully. Redirecting to login')
            goto('/')
        } catch (e) {
            console.error('Password reset failed: ', e);
            formError = 'An error occurred. Please try again';
            isDialogOpen = true;
        }
    };

    async function checkStatus() {
        try {
            const resp = await account.get();
            if (resp) {
                goto('/chat');
            }
        } catch (e) {
            // Handle error if needed
        }
    }

    // @ts-ignore
    function closeDialog() {
        isDialogOpen = false;
    }

    onMount(() => {
        checkStatus();
        // @ts-ignore
        function handleKeydown(e) {
            if (e.key === 'Escape') {
                closeDialog();
            }
        }
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    function handleContextMenu(e) {
        e.preventDefault();
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
                <form on:submit={appStartRecovery}>
                    <div class="a-3--z"><input placeholder="Enter Password" type="password" class="app-input--password" draggable="false" id="app-password" name="password" autocomplete="off" spellcheck="false" /></div>
                    <div class="a-3--z"><input placeholder="Confirm Password" type="password" class="app-input--password" draggable="false" id="app-confirmpassword" name="confirmpassword" autocomplete="off" spellcheck="false" /></div>
                    <div class="a-3--alpha"><div class="a-3-al--left"><a href="/">Go back</a></div><div class="a-3-al-right"></div></div>
                    <button class="a-3--submitBtn" type="submit">Continue</button>
                </form>
                <div style="display:flex; justify-content: center; margin-top: -10px;"><p class="app-ftrnt"></p></div>
            </div>
        </div>

        <div class="a-2--y"></div>
        <div class="a-4">
            {#if isDialogOpen}
                <div class="dialog-overlay">
                    <div class="dialog">
                        {formError}
                        <button on:click={closeDialog}>Close</button>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>
