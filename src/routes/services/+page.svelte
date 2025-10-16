<script>
  import ServiceInfoCard from "../ServiceInfoCard.svelte";

  const services = [
      {
          title: "Ruční mytí vozu",
          subtitle: "Kompletní ruční mytí s prémiovou péčí",
          priceList: [
              { variant: "Sedan, Kombi", price: "1 500 Kč" },
              { variant: "SUV", price: "2 000 Kč" },
              { variant: "MPV, Minivan", price: "2 500 Kč" }
          ],
          taskList: [
              "Aktivní pěna",
              "Ruční mytí karoserie, podběhů a kol",
              "Aplikace tekutého vosku",
              "Sušení vozu, včetně mezidveřního prostoru",
              "Vyleštění oken exteriéru",
              "Impregnace pneumatik"
          ],
          icon: "hand_wash"
      },
      {
          title: "Balíček Standard",
          subtitle: "Základní péče o interiér a exteriér vozu",
          priceList: [
              { variant: "Sedan, Kombi", price: "3 000 Kč" },
              { variant: "SUV", price: "3 500 Kč" },
              { variant: "MPV, Minivan", price: "5 000 Kč" }
          ],
          taskList: [
              "Ruční mytí vozu",
              "Vysátí interiéru",
              "Aplikace tekutého vosku",
              "Čištění interiérových plastů",
              "Vyleštění oken a displejů",
          ],
          icon: "standard_package"
      },
      {
          title: "Balíček Premium",
          subtitle: "Komplexní péče o interiér i exteriér s ochranou skel, sedadel a interiérových plastů",
          priceList: [
              { variant: "Sedan, Kombi", price: "4 500 Kč" },
              { variant: "SUV", price: "5 500 Kč" },
              { variant: "MPV, Minivan", price: "8 000 Kč" }
          ],
          taskList: [
              "Ruční mytí vozu + Balíček Standard",
              "Navíc: Tepování textilních sedadel a koberců",
              "Čištění kožených sedadel a následná impregnace",
              "Čištění interiérových plastů, včetně následné impregnace",
              "Aplikace keramického povlaku na okna"
          ],
          icon: "premium_package"
      },
      {
          title: "Voskování vozu",
          subtitle: "Ochrana laku a dlouhotrvající lesk",
          priceList: [
              { variant: "Sedan, Kombi", price: "4 000 Kč" },
              { variant: "SUV", price: "6 000 Kč" },
              { variant: "MPV, Minivan", price: "8 000 Kč" }
          ],
          taskList: [
              "Ruční mytí vozu",
              "Chemická a mechanická dekontaminace laku",
              "Aplikace tuhého vosku s životností až 12 měsíců",
              "Aplikace keramického povlaku na okna",
          ],
          icon: "wax"
      },
      {
          title: "Renovace a leštění laku",
          subtitle: "Profesionální péče o lak pro obnovu lesku a odstranění drobných nedokonalostí",
          price: "od 7 000 Kč",
          icon: "paint_correction"
      },
      {
          title: "Keramická ochrana laku",
          subtitle: "Dlouhodobá ochrana a maximální lesk laku vozidla",
          priceList: [
              { variant: "Keramická ochrana na jeden rok", price: "12 000 Kč" },
              { variant: "Keramická ochrana na dva roky", price: "20 000 Kč" },
          ],
          icon: "ceramic_coating"
      },
      {
          title: "Dezinfekce ozonem",
          subtitle: "Efektivní odstranění zápachu a bakterií z interiéru",
          taskList: [
              "Odstranění zápachu a dezinfekce prostor (čištění ozonem) provádíme pomocí výkonných generátorů ozonu",
              "Ozon ničí bakterie, viry a plísně",
          ],
          price: "500 Kč",
          icon: "ozone_disinfection"
      },
  ]
</script>

<div class="services">
  <div class="services-container">
    <h2 class="heading">Moje služby</h2>
    <p class="subheading">
      Profesionální detailingové služby přizpůsobené potřebám vašeho vozidla.
    </p>
    <div class="services-wrapper">
        {#each services as serviceItem, i (i)}
            <ServiceInfoCard {...serviceItem} />
        {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .services {
    background-image: linear-gradient(
      135deg,
      hsl(220 20% 8%) 0%,
      hsl(220 25% 12%) 50%,
      hsl(210 100% 15%) 100%
    );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    width: 100vw;
    height: 100vh;
  }

  .services-container {
    padding: 160px 14px 14px;
    max-height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .services-wrapper {
    display: grid;
    gap: 1.5rem;
    justify-self: center;

    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (min-width: 1400px) {
      max-width: 1400px;
    }
  }
</style>
