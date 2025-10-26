<script>
  import ContactInfoCard from '../ContactInfoCard.svelte';
  import emailjs from '@emailjs/browser';
  import { writable } from 'svelte/store';
  import { toast } from 'svelte-sonner';

  let name = '';
  let email = '';
  let phone = '';
  let message = '';

  let sending = writable(false);

  const sendEmail = async () => {
    sending.set(true);

    try {
      await emailjs.send(
        'service_j1fjx83', // service_id
        'template_gx98vgi', // template_id
        { name, email, phone, message },
        'L0ZmjGDvgMkuH3y-t', // public_key
      );
      toast.success('Email byl úspěšně odeslán.', { class: 'toast--success' });
      name = '';
      email = '';
      phone = '';
      message = '';
    } catch (error) {
      console.error(error);
      toast.error('Došlo k chybě při odesílání.', { class: 'toast--error' });
    } finally {
      sending.set(false);
    }
  };
</script>

<div class="contacts">
  <div class="contacts-container">
    <h2 class="heading">Domluvte si svůj termín</h2>
    <p class="subheading">Připraveni dopřát svému vozidlu péči, kterou si zaslouží? Kontaktujte nás ještě dnes</p>
    <div class="contacts-wrapper">
      <div class="contact-form">
        <h3 class="title">Napiště nám</h3>
        <span class="subtitle">Vyplň formulář a my se Vám ozveme hned jak to bude možné</span>
        <input type="text" placeholder="Jméno" bind:value={name} />
        <input type="email" placeholder="Email" bind:value={email} />
        <input type="tel" placeholder="Mobil" bind:value={phone} />
        <textarea placeholder="Napiště něco o svém vozidle a potřebných službách" bind:value={message}></textarea>
        <button class="button-primary" on:click|preventDefault={sendEmail} disabled={$sending}>
          {$sending ? 'Odesílám...' : 'Poptat služby'}
        </button>
      </div>
      <div class="contact-info">
        <ContactInfoCard header="Mobil" icon="phone">+420 736 682 665</ContactInfoCard>
        <ContactInfoCard header="Email" icon="email">itstime@premiumwash.cz</ContactInfoCard>
        <ContactInfoCard header="Lokace" icon="location">
          <div class="address">
            <span>Majorova 1582,</span>
            <span>666 01 Tisnov</span>
          </div>
        </ContactInfoCard>
        <ContactInfoCard header="Otevírací doba">
          <div class="business-hours">
            <span>Pondělí - Pátek</span>
            <span>9:00 - 17:00</span>
          </div>
          <div class="business-hours">
            <span>Sobota</span>
            <span>10:00 - 15:00</span>
          </div>
          <div class="business-hours">
            <span>Neděle</span>
            <span>Po domluvě</span>
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
    height: 100%;
  }

  .contacts-container {
    padding: var(--navbar-height) 14px 14px;
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
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1.5rem;
    background-image: linear-gradient(180deg, hsl(220 18% 12%) 0%, hsl(220 20% 10%) 100%);

    textarea {
      min-height: 120px;
    }

    .title {
      color: var(--color-text-primary);
    }

    .subtitle {
      color: var(--color-text-secondary);
    }
  }
</style>
