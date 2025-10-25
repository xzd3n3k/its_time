<script lang="ts">
    import Home from "./Home.svelte";
</script>

<div class="home">
    <Home></Home>
</div>

<style>
    .home {
        background-image: url("/red_audi_back.jpeg"),
            radial-gradient(
                circle,
                hsl(220 20% 8% / 0.8),
                hsl(220 20% 8% / 0.6),
                hsl(220 20% 8%) 70%
            );
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        width: 100vw;
        height: 100vh;
    }
</style>
