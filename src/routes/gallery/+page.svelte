<script>
  import StatsCard from '../StatsCard.svelte';
  import { onMount } from 'svelte';

  const images = [
    { src: '/audi_rs8_spz.jpg', label: 'Audi RS8', description: 'Kompletní mytí + keramická ochrana' },
    { src: '/audi_rs8_interior.jpg', label: 'Audi RS8', description: 'Kompletní čištění interiéru + impregnace kůže' },
    { src: '/audi_rs3_spz.jpeg', label: 'Audi RS3', description: 'Kompletní mytí + keramická ochrana' },
    { src: '/audi_rs3_wheel.jpg', label: 'Audi RS3', description: 'Kompletní dekontaminace kol + keramická ochrana' },
    { src: '/nissan_gtr_spz.jpeg', label: 'Nissan GTR', description: 'Renovace laku + keramická ochrana' },
    { src: '/mercedes_a180_spz.jpeg', label: 'Mercedes Benz A180', description: 'Kompletní mytí + vosk' },
    { src: '/mercedes_a180_interior.jpg', label: 'Mercedes Benz A180', description: 'Hloubkové čištění interiéru' },
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

      {#if imagesLoaded}
        <div class="images-wrapper">
          {#each images as image, i (i)}
            <div class="image-card">
              <img src={image.src} alt={image.label} />
              <div class="overlay">
                <h3>{image.label}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .image-card {
    position: relative;
    width: 320px;
    height: 320px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition:
        transform 0.4s ease,
        filter 0.4s ease;
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
      transition:
        background 0.3s ease,
        opacity 0.3s ease;
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
      will-change: transform;
    }
  }
</style>
