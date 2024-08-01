<!-- Chat.Svelte / Testing -->

<svelte:head>
    <title>Home</title>
</svelte:head>

<script>
    // @ts-nocheck
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation'
    import '../styles/app.css'
    import '../styles/chat.css'
    import { account } from '$lib/appwrite'

    let user = null 
    const fetchUser = async () => {
        try {
            user = await account.get()
            console.clear()
        }
        catch(e) {
            goto('/')
        }
    } 

    const logout = async () => {
        try {
            await account.deleteSession('current')
            await user.logout
            user = null
            goto('/')
            console.clear()
        }
        catch(e) {
        }
    }

    onMount(()=> { fetchUser() })
</script>

<main>
    {#if user} 
        <h1>Welcome, {user.name}</h1>
        <button on:click={logout}>Logout</button>
    {/if}
</main>