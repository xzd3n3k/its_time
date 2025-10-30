<script lang="ts">
  import { writable } from 'svelte/store';
  import { emailService } from '$lib/services/emailService';
  import { toast } from 'svelte-sonner';

  export let services = [
    { title: 'Ruční mytí vozu' },
    { title: 'Balíček Standard' },
    { title: 'Balíček Premium' },
    { title: 'Voskování vozu' },
    { title: 'Renovace a leštění laku' },
    { title: 'Keramická ochrana laku' },
    { title: 'Dezinfekce ozonem' },
  ];
  let name = '';
  let email = '';
  let phone = '';
  let selectedServices: string[] = [];
  let car = '';

  let sending = writable(false);

  const handleSubmit = async () => {
    if (!name || !email || !selectedServices.length || !car) {
      return;
    }

    let message = '';

    message += 'Vozidlo: ' + car;
    message += selectedServices.join('\n');

    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      await emailService.sendEmail(formData);
      toast.success('Email byl úspěšně odeslán.', { class: 'toast--success' });
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error('Došlo k chybě při odesílání.', { class: 'toast--error' });
    } finally {
      sending.set(false);
    }
  };

  const resetForm = () => {
    name = '';
    email = '';
    phone = '';
    selectedServices = [];
    car = '';
  };
</script>

<div class="form-container">
  <h2>Objednávka služby</h2>

  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-content-wrapper">
      <input type="text" id="name" bind:value={name} required placeholder="Jméno" autofocus />
      <input type="email" id="email" bind:value={email} required placeholder="Email" />
      <input type="tel" id="phone" bind:value={phone} placeholder="Mobil" />

      <label class="services-checkbox-label" for="services">Vyberte služby:</label>
      <div class="services-checkbox" id="services">
        {#each services as service, i (i)}
          <label class="services-picker">
            <input type="checkbox" value={service.title} bind:group={selectedServices} />
            {service.title}
          </label>
        {/each}
      </div>

      <input type="text" id="car" bind:value={car} required placeholder="Značka a model, např.: Ford Mondeo" />
    </div>
    <button class="button-outline" type="submit">Objednat</button>
  </form>
</div>

<style lang="scss">
  .form-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    gap: 16px;

    .services-checkbox-label {
      color: var(--color-text-secondary);
    }

    .services-checkbox {
      color: var(--color-text-primary);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    label {
      user-select: none;
    }
  }
  .form-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .services-picker {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      width: fit-content;
    }
  }
</style>
