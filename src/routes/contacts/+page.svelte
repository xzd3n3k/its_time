<script lang="ts">
  import ContactInfoCard from '../ContactInfoCard.svelte';
  import { writable } from 'svelte/store';
  import { toast } from 'svelte-sonner';
  import { emailService, type ContactForm } from '../../lib/services/emailService';

  let name = '';
  let email = '';
  let phone = '';
  let message = '';

  let sending = writable(false);

  const sendEmail = async () => {
    sending.set(true);
    const form: ContactForm = { name, email, phone, message };

    try {
      await emailService.sendEmail(form);
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
        <h3 class="form-title">Napiště nám</h3>
        <span class="subtitle">Vyplň formulář a my se Vám ozveme hned jak to bude možné</span>
        <input type="text" placeholder="Jméno" required bind:value={name} disabled={$sending} />
        <input type="email" placeholder="Email" required bind:value={email} disabled={$sending} />
        <input type="tel" placeholder="Mobil" bind:value={phone} disabled={$sending} />
        <textarea
          placeholder="Napiště něco o svém vozidle a potřebných službách"
          required
          bind:value={message}
          disabled={$sending}
        ></textarea>
        <button class="button-primary" on:click|preventDefault={sendEmail} disabled={$sending}>
          {$sending ? 'Odesílám...' : 'Poptat služby'}
        </button>
      </div>
      <div class="contact-info">
        <ContactInfoCard header="Mobil" icon="phone">+420 727 964 649</ContactInfoCard>
        <ContactInfoCard header="Email" icon="email">Na vytvoření emailové schránky se pracuje</ContactInfoCard>
        <ContactInfoCard header="Lokace" icon="location">
          <div class="address">
            <span>Zámecká 33/57,</span>
            <span>Brno-Chrlice</span>
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

    .form-title {
      color: var(--color-text-primary);
    }

    .subtitle {
      color: var(--color-text-secondary);
    }
  }
</style>
