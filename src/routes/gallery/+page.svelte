<script>

import StatsCard from "../StatsCard.svelte";
</script>

<div class="gallery">
    <div class="gallery-container">
        <h2 class="heading">Naše práce</h2>
        <p class="subheading">Podívejte se na proměnu, kterou přinášíme každým detailem</p>
        <div class="gallery-wrapper">
            <StatsCard />
        </div>
    </div>
</div>

<style lang="scss">
  .gallery {
    background-image: linear-gradient(135deg, hsl(220 20% 8%) 0%, hsl(220 25% 12%) 50%, hsl(210 100% 15%) 100%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    width: 100vw;
    height: 100%;
  }

  .gallery-container {
    padding: 160px 14px 14px;
    max-height: 100%;
    overflow: auto;
  }

  .gallery-wrapper {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
