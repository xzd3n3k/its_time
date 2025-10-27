<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  const stats = [
    { label: 'Realizovaných zakázek', value: 360 },
    { label: 'Stálých klientů', value: 80 },
    { label: 'Let zkušeností', value: 10 },
    { label: 'Průměrné hodnocení', value: 5 },
  ];

  let counter1 = tweened(0, { duration: 2000, easing: cubicOut });
  let counter2 = tweened(0, { duration: 2000, easing: cubicOut });
  let counter3 = tweened(0, { duration: 2000, easing: cubicOut });
  let counter4 = tweened(0, { duration: 2000, easing: cubicOut });

  onMount(() => {
    counter1.set(stats[0].value);
    counter2.set(stats[1].value);
    counter3.set(stats[2].value);
    counter4.set(stats[3].value);
  });
</script>

<div class="stats-card">
  <div class="stat">
    <div class="number">{Math.round($counter1)}+</div>
    <div class="label">{stats[0].label}</div>
  </div>

  <div class="stat">
    <div class="number">{Math.round($counter2)}</div>
    <div class="label">{stats[1].label}</div>
  </div>

  <div class="stat">
    <div class="number">{Math.round($counter3)}+</div>
    <div class="label">{stats[2].label}</div>
  </div>

  <div class="stat">
    <div class="number">{$counter4.toFixed(1)}</div>
    <div class="label">{stats[3].label}</div>
  </div>
</div>

<style>
  .stats-card {
    display: flex;
    justify-content: space-around;
    padding: 12px;
    color: var(--color-accent);
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    will-change: transform;

    @media only screen and (max-width: 560px) {
      font-size: 10px;
    }
  }

  .stat {
    flex: 1;
    margin: 0 1rem;
    align-content: center;
  }

  .number {
    font-size: 2rem;
    font-weight: bold;
  }

  .label {
    margin-top: 0.5rem;
    color: var(--color-text-secondary);
  }
</style>
