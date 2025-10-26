<script lang="ts">
    import Home from "./Home.svelte";
</script>

<div class="home">
    <Home></Home>
</div>

<style>
    .home {
        background-color: hsl(220, 25%, 12%);
        background-image:
                radial-gradient(
                        circle at 90% 10%,
                        hsl(209, 100%, 30%) 0%,
                        transparent 60%
                ),
                radial-gradient(
                        circle at 10% 90%,
                        hsl(287, 100%, 18%) 0%,
                        transparent 70%
                ),
                radial-gradient(
                        circle at 50% 50%,
                        hsl(220, 20%, 10%) 0%,
                        transparent 100%
                );
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        width: 100vw;
        height: 100%;
    }
</style>
