<script lang="ts">
    export let services = [{title: "test"}]; // služby, které si může uživatel vybrat
    let name = '';
    let email = '';
    let phone = '';
    let selectedServices: string[] = [];
    let carBrand = '';
    let carVariant = '';

    const handleSubmit = () => {
        if (!name || !email || !phone || !selectedServices.length || !carBrand || !carVariant) {
            return;
        }

        const formData = {
            name,
            email,
            phone,
            selectedServices,
            carBrand,
            carVariant
        };

        console.log("Formulář odeslán:", formData);
        resetForm();
    };

    const handleCheckboxChange = (event: any) => {
        if (event.target.checked) {
            selectedServices = [...selectedServices, event.target.value];
        } else {
            selectedServices = selectedServices.filter(service => service !== event.target.value);
        }
    };

    const resetForm = () => {
        name = '';
        email = '';
        phone = '';
        selectedServices = [];
        carBrand = '';
    };
</script>

<div class="form-container">
    <h2>Objednávka služby</h2>

    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" id="name" bind:value={name} required placeholder="Jméno" autofocus />
        <input type="email" id="email" bind:value={email} required placeholder="Email" />
        <input type="tel" id="phone" bind:value={phone} required placeholder="Mobil" />

        <label for="services">Vyberte služby:</label>
        <div class="services-checkbox">
            {#each services as service, i (i)}
                <span class="services-picker">
                    <input
                            type="checkbox"
                            value={service.title}
                            on:change={handleCheckboxChange}
                    />
                    {service.title}
                </span>
            {/each}
        </div>

        <input type="text" id="carBrand" bind:value={carBrand} required placeholder="Značka a model, např.: Ford Mondeo" />

        <button class="button-outline" type="submit">Objednat</button>
    </form>
</div>

<style lang="scss">
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .services-picker {
        display: inline-flex;
        align-items: center;
        gap: 16px;
      }
    }
</style>
