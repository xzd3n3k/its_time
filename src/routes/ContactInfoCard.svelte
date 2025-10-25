<script lang="ts">
    import * as Svelte from "svelte";

    let {header, icon, children}: {header?: string, icon?: string, children?: Svelte.Snippet} = $props();
</script>

<div class="card-container">
    {#if icon}
        <div class="icon-wrapper">
            <img
                src="/{icon}.svg"
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
    </div>

</div>

<style lang="scss">
    .card-container {
        display: flex;
        align-items: center;
        gap: 16px;
        border: 1px solid rgb(48 53 65);
        border-radius: 0.75rem;
        padding: 1.5rem;
        background-image: linear-gradient(180deg, hsl(220 18% 12%) 0%, hsl(220 20% 10%) 100%);
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
        cursor: default;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(26, 140, 255, 0.3) 0px 0px 40px 0px;
          border-color: rgb(26, 140, 255);
          .icon-wrapper {
                background-color: rgb(26 140 255 / 20%);;
            }
        }

        .card-content-container {
          width: 100%;
          line-height: 24px;
        }
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        color: white;

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
        }
    }

    .card-content {
        font-size: 0.95rem;
        color: rgb(148, 163, 184);
    }

    .icon-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(26, 140, 255, 0.1);
        border-radius: 0.75rem;
        width: 48px;
        min-width: 48px;
        min-height: 48px;
        height: 48px;
    }
</style>
