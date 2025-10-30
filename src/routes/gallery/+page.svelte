<script>
  import StatsCard from '../StatsCard.svelte';
  import { onMount } from 'svelte';

  const images = [
    { src: '/AudiA7.jpg', label: 'Audi A7', description: 'Kompletní mytí + keramická ochrana' },
    {
      src: '/AudiRS5.jpg',
      label: 'Audi RS5',
      description: 'Kompletní mytí + keramická ochrana',
    },
    { src: '/MercedesA.jpg', label: 'Mercedes Benz A180', description: 'Kompletní mytí + vosk' },
    { src: '/BMWM3.jpg', label: 'BMW M3 CS', description: 'Kompletní mytí + keramická ochrana' },
    { src: '/MercedesS.jpg', label: 'Mercedes S', description: 'Kompletní mytí + keramická ochrana' },
    { src: '/porsche_cayenne.jpg', label: 'Porsche Cayenne', description: 'Kompletní mytí + keramická ochrana' },
  ];

  let imagesLoaded = false;

  onMount(async () => {
    await Promise.all(
      images.map(
        (image) =>
          new Promise((res) => {
            const img = new Image();
            img.src = image.src;
            img.onload = () => res(true);
          }),
      ),
    );

    imagesLoaded = true;
  });
</script>

<div class="gallery">
  <div class="gallery-container">
    <h2 class="heading">Naše práce</h2>
    <p class="subheading">Podívejte se na proměnu, kterou přinášíme každým detailem</p>
    <div class="gallery-wrapper">
      <StatsCard />

      <div class="images-wrapper">
        {#if imagesLoaded}
          {#each images as image, i (i)}
            <div class="image-card">
              <img src={image.src} alt={image.label} />
              <div class="overlay">
                <h3>{image.label}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          {/each}
        {:else}
          <div class="placeholder"></div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .placeholder {
    position: relative;
    width: 320px;
    height: 320px;
    background: linear-gradient(135deg, #222 0%, #333 100%);
    animation: pulse 1.5s ease-in-out infinite;
    border-radius: 8px;
  }

  .image-card {
    position: relative;
    width: 320px;
    height: 320px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    contain: layout paint;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      transform: translateZ(0);
      will-change: transform, filter;
      backface-visibility: hidden;
      transition:
        transform 0.4s ease,
        filter 0.4s ease;
    }

    @keyframes pulse {
      0% {
        opacity: 0.6;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.6;
      }
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0);
      color: white;
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 8px;
      //transition:
      //  background 0.3s ease,
      //  opacity 0.3s ease;
      pointer-events: none;
    }

    &:hover {
      img {
        transform: scale(1.1);
        filter: brightness(70%);
      }

      .overlay {
        background: rgba(0, 0, 0, 0.4);
        opacity: 1;
      }
    }

    h3 {
      margin: 0;
      font-size: 0.9rem;
      font-weight: bold;
    }

    p {
      margin: 0;
      font-size: 0.7rem;
    }
  }
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
    padding: var(--navbar-height) 14px 14px;
    max-height: 100%;
    overflow: auto;
  }

  .gallery-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;

    .images-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
    }
  }
</style>
