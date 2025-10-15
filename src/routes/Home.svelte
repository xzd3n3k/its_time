<script>
import {goto} from "$app/navigation";
</script>

<div class="home-page">
    <h1>Prémiový Auto Detailing</h1>
    <p>
        Proměňte své vozidlo pomocí profesionálního detailingového servisu,
        který obnoví a ochrání jeho krásu.
    </p>
    <div class="home-buttons">
        <button class="button-primary" on:click={() => goto('/contacts')}>Domluvit si termín</button>
        <button class="button-outline" on:click={() => goto('/services')}>Nabídka služeb</button>
    </div>
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
    }
</style>
