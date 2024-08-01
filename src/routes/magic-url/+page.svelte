<script>
    // @ts-nocheck
    import '../styles/app.css'
    import { account, ID } from '$lib/appwrite'
    import { onMount } from 'svelte';
    
    let isDialogOpen = false 

    const sendMagicUrl = async (e) => {
        e.preventDefault()
        const form = e.target 

        const formData = Object.fromEntries(/** @type Record<string, string | undefined>*/
            new FormData(form).entries()
        )

        const { email } = formData 
        if (!email) {
            isDialogOpen = true
            return 
        }
        try {
        await account.createMagicURLToken(ID.unique(), email, 'http://localhost:5173') 
        }
        catch(e) {}
    }

    function closeDialog() {
        isDialogOpen = false 
    }
</script>



<div class="a-0">
    <div class="a-1 0-x">
        <div class="a-2--x">
            <div>
                <div>
                    <h2 class="a-3--x">Secure Messenger +</h2>
                    <p class="a-3--y">Enter email address and check inbox to SignIn</p>
                </div>
                <form on:submit|preventDefault={sendMagicUrl}>
                    <div class="a-3--z"><input placeholder="Email address" type="email" class="app-input--email" draggable="false" id="app-uemail" name="email" autocomplete="off" spellcheck="false"/></div>
                    <div class="a-3--alpha"><div class="a-3-al--left"><a href="/register">Go Back</a></div></div>
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
                        Please fill all the fields to continue
                        <button on:click={closeDialog}>Close</button>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>
