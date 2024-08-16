<script>
    let loadProfileImg = null
</script>

<div class="app-comp--navigation-rail">
    <div class="app-comp--navigation-rail--image">
        <img src={loadProfileImg} alt="" />
    </div>
</div>

<style>
    .app-comp--navigation-rail {
        left: 0;
        width: auto;
        height: 100vh;
        position: fixed;
    }
    .app-comp--navigation-rail--image {
        background-color: #2E2E2E;
        width: 40px; height: 40px;
        border-radius: 100px;
        margin: 24px;
    }
</style>