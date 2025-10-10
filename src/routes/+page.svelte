
<script lang="ts">

</script>

<img src="/src/lib/assets/hero_car.jpg" />
<div class="img-overlay"></div>
<div class="home"></div>

<style>
    img {
        position: absolute;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
    .img-overlay {
        background-image: linear-gradient(to bottom, hsl(220 20% 8% / .8), hsl(220 20% 8% / .6), hsl(220 20% 8%));
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
</style>
