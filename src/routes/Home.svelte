<script lang="ts">
  import { goto } from '$app/navigation';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let componentMounted = false;
  onMount(() => {
    componentMounted = true;
  });
</script>

<div class="home-page">
  {#if componentMounted}
    <img src="/logo_zakladni.svg" width="325" height="312" alt="logo" in:fly={{ x: 200, duration: 800, opacity: 0 }} />
    <h3 class="heading" in:fly={{ x: -200, duration: 800, delay: 100 }}>
      Je čas vrátit vašemu autu jeho krásu a eleganci.
    </h3>
    <p class="subheading-text" in:fly={{ x: -200, duration: 800, delay: 100 }}>
      Jsme It’s Time, detailingová služba pro všechny, kdo chtějí, aby jejich vůz vypadal skvěle každý den. Od mytí až po
      finální lesk – děláme maximum pro to, aby vaše auto bylo vždy připravené udělat dojem.
    </p>
    <div class="home-buttons" in:fly={{ y: 100, duration: 800, delay: 500 }}>
      <button class="button-primary" on:click={() => goto('/contacts')}>Domluvit si termín</button>
      <button class="button-outline" on:click={() => goto('/services')}>Nabídka služeb</button>
    </div>
  {/if}
</div>

<style lang="scss">
  .home-buttons {
    display: flex;
    width: 50%;
    justify-content: center;
    gap: 16px;
    button {
      width: 200px;
    }
  }
  .home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 100%;
    flex-direction: column;

    .subheading-text {
      width: 50%;
      text-align: justify;
    }

    h1 {
      text-align: center;
    }
  }

  @media only screen and (max-width: 720px) {
    .subheading-text {
      width: 100% !important;
      padding: 0 16px;
    }

    .heading {
      padding: 0 16px;
    }
  }
</style>
