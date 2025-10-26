<script>
  import StatsCard from '../StatsCard.svelte';
</script>

<div class="gallery">
  <div class="gallery-container">
    <h2 class="heading">Naše práce</h2>
    <p class="subheading">Podívejte se na proměnu, kterou přinášíme každým detailem</p>
    <div class="gallery-wrapper">
      <StatsCard />

      <div class="images-wrapper">
        <div class="image-card">
          <img src="/audi_rs8_spz.jpg" alt="Audi RS8" />
          <div class="overlay">
            <h3>Audi RS8</h3>
            <p>Kompletní mytí + keramická ochrana</p>
          </div>
        </div>

        <div class="image-card">
          <img src="/audi_rs8_interior.jpg" alt="Audi RS8" />
          <div class="overlay">
            <h3>Audi RS8</h3>
            <p>Kompletní čištění interiéru + impregnace kůže</p>
          </div>
        </div>

        <div class="image-card">
          <img src="/audi_rs3_spz.jpeg" alt="Audi RS3" />
          <div class="overlay">
            <h3>Audi RS3</h3>
            <p>Kompletní mytí + keramická ochrana</p>
          </div>
        </div>

        <div class="image-card">
          <img src="/audi_rs3_wheel.jpg" alt="Audi RS3" />
          <div class="overlay">
            <h3>Audi RS3</h3>
            <p>Kompletní dekontaminace kol + keramická ochrana</p>
          </div>
        </div>

        <div class="image-card">
          <img src="/nissan_gtr_spz.jpeg" alt="Nissan GTR" />
          <div class="overlay">
            <h3>Nissan GTR</h3>
            <p>Renovace laku + keramická ochrana</p>
          </div>
        </div>

        <div class="image-card">
          <img src="/mercedes_a180_spz.jpeg" alt="Mercedes Benz A180" />
          <div class="overlay">
            <h3>Mercedes Benz A180</h3>
            <p>Kompletní mytí + vosk</p>
          </div>
        </div>

        <div class="image-card">
          <img src="/mercedes_a180_interior.jpg" alt="Mercedes Benz A180" />
          <div class="overlay">
            <h3>Mercedes Benz A180</h3>
            <p>Hloubkové čištění interiéru</p>
          </div>
        </div>
      </div>
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
    }
  }
</style>
