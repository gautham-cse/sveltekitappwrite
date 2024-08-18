<!-- Chat.Svelte -->

<script>
    // @ts-nocheck
    import '../styles/app.css'
    import '../styles/chat.css'
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation'
    import { account } from '$lib/appwrite'
    import NavigationFooter from '../components/navigation-footer/+page.svelte'
    import NavigationRail from '../components/navigation-rail/+page.svelte'

    let username = '. . .'
    let useremail = '. . .'

    async function handleLogoutOption() {
        let logoutMessage = "Are you sure you want to logout?"
        if (confirm(logoutMessage) == true) {
            await account.deleteSession('current')
            goto('/')
        }
    }

    async function checkStatus() {
        try {
            const response = await account.get()
            if (response) {
                username = response.name
                useremail = response.email 
            }
            else {
                goto('/')
            }
        }
        catch(e) {
            console.log('An unknown error occurred: ', e)
        }
    }

    onMount(() => {
        checkStatus()
    })
</script>

<div>
    <h3>Welcome, {username}</h3>
    <h5>{useremail}</h5>
    <button on:click={handleLogoutOption}>Logout</button>
</div>

<svelte:head>
    <title>{username}</title>
</svelte:head>

<style>
    div {
        color: white;
    }
</style>