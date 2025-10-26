<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '../app.css';
  import Navbar from './Navbar.svelte';
  import { Toaster } from 'svelte-sonner';

  let { children } = $props();

  const icons = [
    '/phone.svg',
    '/email.svg',
    '/location.svg',
    '/hand_wash.svg',
    '/standard_package.svg',
    '/premium_package.svg',
    '/wax.svg',
    '/paint_correction.svg',
    '/ceramic_coating.svg',
    '/ozone_disinfection.svg',
    '/logo_zakladni.svg',
  ];

  const images = ['/audi_rs8_spz.jpg', '/audi_rs8_interior.jpg', '/audi_rs3_spz.jpeg', '/audi_rs3_wheel.jpg'];
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  {#each icons as icon, i (i)}
    <link rel="preload" as="image" href={icon} />
  {/each}
  <!--{#each images as image, i (i)}-->
  <!--  <link rel="prefetch" as="image" href={image} />-->
  <!--{/each}-->
</svelte:head>

<Navbar></Navbar>

{@render children?.()}

<Toaster position="bottom-right" />
