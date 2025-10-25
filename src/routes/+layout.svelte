<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";
	import Navbar from "./Navbar.svelte";
    import { Toaster } from 'svelte-sonner';

	let { children } = $props();

    const iconsAndImages = [
        '/red_audi_back.jpeg',
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
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    {#each iconsAndImages as icon, i (i)}
        <link rel="preload" as="image" href="{icon}">
    {/each}
</svelte:head>

<Navbar></Navbar>

{@render children?.()}

<Toaster position="bottom-right" />
