<script>

import ContactInfoCard from "../ContactInfoCard.svelte";
</script>

<div class="contacts">
    <div class="contacts-container">
        <h2 class="heading">Domluvte si svuj termin</h2>
        <p class="subheading">Pripraveni doprat svemu vozidlu peci, kterou si zaslouzi? Kontaktujte me jeste dnes.</p>
        <div class="contacts-wrapper">
            <div class="contact-form">
                <h3 class="title">Posli mi zpravu</h3>
                <span class="subtitle">Vypln formular a ja se ti ozvu hned jak to bude mozne</span>
                <input type="text" placeholder="Jmeno">
                <input type="email" placeholder="Email">
                <input type="tel" placeholder="Mobil">
                <textarea placeholder="Napis neco o svem aute a potrebnych sluzbach"></textarea>
                <button class="button-primary">Poptat sluzby</button>
            </div>
            <div class="contact-info">
                <ContactInfoCard header="Mobil" icon="phone">
                    +420 736 682 665
                </ContactInfoCard>
                <ContactInfoCard header="Email" icon="email">
                    itstime@premiumwash.cz
                </ContactInfoCard>
                <ContactInfoCard header="Lokace" icon="location">
                    <div class="address">
                        <span>Majorova 1582,</span>
                        <span>666 01 Tisnov</span>
                    </div>
                </ContactInfoCard>
                <ContactInfoCard header="Oteviraci doba">
                    <div class="business-hours">
                        <span>Pondeli - Patek</span>
                        <span>9:00 - 17:00</span>
                    </div>
                    <div class="business-hours">
                        <span>Sobota</span>
                        <span>10:00 - 15:00</span>
                    </div>
                    <div class="business-hours">
                        <span>Nedele</span>
                        <span>Po domluve</span>
                    </div>
                </ContactInfoCard>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .contacts {
        background-image: linear-gradient(135deg, hsl(220 20% 8%) 0%, hsl(220 25% 12%) 50%, hsl(210 100% 15%) 100%);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        width: 100vw;
        height: 100vh;
    }

    .contacts-container {
      padding: 160px 14px 14px;
      max-height: 100%;
      overflow: auto;
    }

    .contacts-wrapper {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .contact-info {
        flex: 1;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 16px;

      .address {
        display: flex;
        flex-direction: column;
      }

      .business-hours {
          display: flex;
          justify-content: space-between;
      }
    }

    .contact-form {
      flex: 1;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 16px;
      border: 1px solid rgb(48 53 65);
      border-radius: 0.75rem;
      padding: 1.5rem;
      background-image: linear-gradient(180deg, hsl(220 18% 12%) 0%, hsl(220 20% 10%) 100%);

      textarea {
        min-height: 120px;
      }

      .title {
        color: white;
      }

      .subtitle {
        color: rgb(148, 163, 184);
      }
    }
</style>
