<!-- Chat.Svelte -->

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
</script>

<main>
    <div class="App-Chat">
        <div class="App-Navigation--Area">
            <div class="App-LeftNavigation--Area">
                <NavigationRail />
            </div>
            <div class="App-RightNavigation--Area">

            </div>
        </div>
    </div>
</main>

<style>
    .App-LeftNavigation--Area {
        position: fixed;
        left: 0;
    }
</style>