<script lang="ts">
    import * as Svelte from "svelte";

    let {header, price, icon, children}: {header?: string, price?: string, icon?: string, children?: Svelte.Snippet} = $props();
</script>

<div class="card-container">
    {#if icon}
        <div class="icon-wrapper">
            <img
                    src="/src/lib/assets/{icon}.svg"
                    width="24"
                    height="24"
                    alt="icon-{icon}"
            />
        </div>
    {/if}

    <div class="card-content-container">
        {#if header}
            <div class="card-header">
                {#if header}<h3>{header}</h3>{/if}
            </div>
        {/if}

        <div class="card-content">
            {@render children?.()}
        </div>
        <span class="price">{price}</span>
    </div>

</div>

<style lang="scss">
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1.5rem;
    background-image: linear-gradient(180deg, hsl(220 18% 12%) 0%, hsl(220 20% 10%) 100%);
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
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
    font-size: 0.95rem;
    color: var(--color-text-secondary);
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

  .price {
    color: rgb(26 140 255);
    font-weight: 600;
    margin-top: auto;
  }
</style>
