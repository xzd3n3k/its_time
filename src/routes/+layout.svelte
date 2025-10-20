<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";
	import Navbar from "./Navbar.svelte";
    import {Toaster} from "svelte-french-toast";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar></Navbar>

{@render children?.()}

<Toaster position="bottom-right" />
