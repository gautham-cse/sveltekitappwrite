<script>
    function handleAlert() {
        console.log('You clicked this button')
    }
</script>

<div>
    <button on:click={handleAlert}>Click this button</button>
</div>



<!-- Chat.Svelte 

<svelte:head>
    <title>Home</title>
</svelte:head>

<script>
    // @ts-nocheck
    import '../styles/app.css'
    import '../styles/chat.css'
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation'
    import { account } from '$lib/appwrite'
    import NavigationFooter from '../components/navigation-footer/+page.svelte'
    import NavigationRail from '../components/navigation-rail/+page.svelte'

    let username = '. . .', email = '. . .'

    const __handleLogout = async () => {
        await account.deleteSession('current')
        console.log('done')
        goto('/')
    }

    function unnn() {
        console.log('ertfgvhbknml,')
    }
    const checkStatus = async () => {
        try {
            const response = await account.get()
            if (response) {
                username = response.name
                email = response.email
            } else {
                goto('/')
            }
        } catch (e) {
            console.error('Error in checkStatus:', e)
        }
    }

    onMount(() => {
        checkStatus()
    })
</script>

<main>
    <div class="App-Chat">
        <div class="App-Navigation--Area">
            <div class="App-LeftNavigation--Area">
                <NavigationRail />
            </div> 
            <br><br><br><br>
            <div class="App-RightNavigation--Area">
                <h3>Welcome, {username}</h3>
                <h5>{email}</h5>
                <button on:click={unnn}>Logout</button>
            </div>
        </div>
    </div>
</main>

<style>
    .App-LeftNavigation--Area {
        position: fixed;
        left: 0;
    }
    .App-RightNavigation--Area {
        color: white;
        margin-left: 30px;
    }
</style>

-->