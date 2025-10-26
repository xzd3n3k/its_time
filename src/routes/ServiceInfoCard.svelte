<script lang="ts">
  interface PriceListItem {
    variant: string;
    price: string;
  }

  let {
    title,
    subtitle,
    priceList,
    taskList,
    price,
    icon,
  }: {
    title?: string;
    subtitle?: string;
    priceList?: PriceListItem[];
    taskList?: string[];
    price?: string;
    icon?: string;
  } = $props();
</script>

<div class="card-container">
  {#if icon}
    <div class="icon-wrapper">
      <img src="/{icon}.svg" width="24" height="24" alt="icon-{icon}" />
    </div>
  {/if}

  <div class="card-content-container">
    {#if title}
      <div class="card-header">
        <h3>{title}</h3>
      </div>
    {/if}
    {#if subtitle}
      <div class="card-content">
        {subtitle}
      </div>
    {/if}
    {#if priceList?.length}
      <div class="price-list-items">
        {#each priceList as priceListItem, i (i)}
          <div class="card-content price-list-item">
            <span>{priceListItem.variant}</span>
            <span class="price">{priceListItem.price}</span>
          </div>
        {/each}
      </div>
    {/if}
    {#if taskList?.length}
      <hr />
      <ul class="task-list">
        {#each taskList as taskListItem, i (i)}
          <li>
            <span class="task-bullet">•</span>
            <span>{taskListItem}</span>
          </li>
        {/each}
      </ul>
    {/if}
    <span class="price">{price}</span>
  </div>
</div>

<style lang="scss">
  hr {
    height: 1px;
    color: var(--color-border);
    background: var(--color-border);
    font-size: 0;
    border: 0;
  }
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1.5rem;
    background-image: linear-gradient(180deg, hsl(220 18% 12%) 0%, hsl(220 20% 10%) 100%);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s,
      box-shadow 0.3s,
      border-color 0.3s;
    cursor: default;

    &:hover {
      box-shadow: var(--shadow-primary);
      border-color: var(--color-primary);
      .icon-wrapper {
        background-color: color-mix(in srgb, var(--color-primary) 20%, transparent);
      }
    }

    .card-content-container {
      width: 100%;
      line-height: 24px;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    color: var(--color-text-primary);

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0;
    }
  }

  .card-content {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
  }

  .task-list {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    list-style: none;

    li {
      display: flex;
      align-items: flex-start;
    }

    .task-bullet {
      font-family: Inter, system-ui, sans-serif;
      color: var(--color-accent);
      margin-right: 0.5rem;
    }
  }

  .icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
    border-radius: 0.75rem;
    width: 48px;
    min-width: 48px;
    min-height: 48px;
    height: 48px;
  }

  .price-list-items {
    .price-list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .price {
    color: var(--color-accent);
    font-weight: 600;
    margin-top: auto;
  }
</style>
