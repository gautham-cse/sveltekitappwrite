<!-- +error.svelte -->

<script>
    import './styles/app.css'
    import { onMount } from 'svelte';

    let currentPath = ''

    onMount(() => {
        currentPath = window.location.pathname
    })
</script>

<div class="app_pageNotFound">
    <div>
        <h2 class="a-3--x">404 - Page not found.</h2>
        <p class="a-3--x--p"><span style="color: white; background-color: #c8c65e; color: black; border-radius:3px; padding: 3px; padding-left: 5px;"> {currentPath} </span> &nbsp;is like a ghost in the server</p><br>
        <a class="makeLnkBtn" href="/">Go Home</a>
    </div>
</div>