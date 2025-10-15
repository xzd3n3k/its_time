<script>
import ServiceInfoCard from "../ServiceInfoCard.svelte";
</script>

<div class="services">
    <div class="services-container">
        <h2 class="heading">Moje sluzby</h2>
        <p class="subheading">Profesionalni detailingove sluzby prizpusobene potrebam vaseho vozidla.</p>
        <div class="services-wrapper">
            <ServiceInfoCard header="Rucni myti vozu" price="od 1500 Kc" icon="hand_wash">
                Aktivni pena
                rucni myti karoserie, podbehu a kol
                aplikace tekuteho vosku
                suseni vozy, vcetne mezidverniho prostoru
                vylesteni oken exterieru
                impregnace pneumatik
            </ServiceInfoCard>
            <ServiceInfoCard header="Balicek Standard" price="od 3000 Kc" icon="standard_package">
                Rucni myti vozu
                Vysati interieru
                Cisteni interierovych plastu
                Vylesteni oken a displeju
            </ServiceInfoCard>
            <ServiceInfoCard header="Balicek Premium" price="od 4500 Kc" icon="premium_package">
                Rucni myti vozu + balicek Standard
                Navic: Tepovani textilnich sedadel a kobercu
                Čištění kožených sedadel a následná impregnace
                Čištění interiérových plastů, včetně následné impregnace
                Aplikace keramického povlaku na okna
            </ServiceInfoCard>
            <ServiceInfoCard header="Voskovani vozu" price="od 4000 Kc" icon="wax">
                Ruční mytí vozu
                Chemická a mechanická dekontaminace laku
                Aplikace tuhého vosku s životností až 12 měsíců
                Aplikace keramického povlaku na okna
            </ServiceInfoCard>
            <ServiceInfoCard header="Renovace a lesteni laku" price="od 7000 Kc" icon="paint_correction">
                Pro stanovení přesné ceny za leštění laku je nezbytné vozidlo osobně
                prohlédnout a dohodnout se na očekávaném výsledku. Ceny se mohou lišit
                v závislosti na rozsahu poškození laku, velikosti vozidla a zvolených
                postupech renovace.
            </ServiceInfoCard>
            <ServiceInfoCard header="Keramicka ochrana laku" price="od 12000 Kc" icon="ceramic_coating">
                Pro dosažení nejlepších výsledků a dlouhotrvající ochrany je
                leštění laku před aplikací keramické ochrany nezbytným krokem.
                Investice do této přípravy se odrazí ve vynikajícím vzhledu
                vašeho vozidla a maximální efektivitě ochranné vrstvy.
            </ServiceInfoCard>
            <ServiceInfoCard header="Dezinfekce ozonem" price="500 Kc" icon="ozone_disinfection">
                Odstranění zápachu a dezinfekce prostor (čištění ozonem) provádíme pomocí
                výkonných generátorů ozonu
                Ozon ničí bakterie, viry a plísně
            </ServiceInfoCard>
        </div>
    </div>
</div>

<style lang="scss">
  .services {
    background-image: linear-gradient(135deg, hsl(220 20% 8%) 0%, hsl(220 25% 12%) 50%, hsl(210 100% 15%) 100%);
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
