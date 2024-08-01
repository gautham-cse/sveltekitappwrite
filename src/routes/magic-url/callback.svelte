
<script>
    import { onMount } from "svelte"
    import { account } from '$lib/appwrite'
    import { goto } from "$app/navigation"

    onMount(async() => {
        try {
            const response = await account.getSession('current')
            if (response) {
                console.log('Logged in successfully', response)
                setTimeout(() => {
                    goto('/chat')
                }, 3000)
            }
        }
        catch(err) {
            console.log('Error during callback handling: ', err)
        }
    })
</script>

<svelte:head>
    <title>Parsing Magic URL</title>
</svelte:head>

<main>
    <h1>Processing Magic Link - - - </h1>
    <p>Please wait while we log in </p>
</main>