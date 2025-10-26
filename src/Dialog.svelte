<script lang="ts">
    export let dialog: HTMLDialogElement;
    export let title = '';
    export let showClose = true;

    function close() {
        dialog.close();
    }
</script>

<dialog bind:this={dialog} on:close>
    <div class="dialog-container">
        {#if title || showClose}
            <header class="dialog-header">
                {#if title}
                    <h2>{title}</h2>
                {/if}
                {#if showClose}
                    <button class="close-button" on:click={close} aria-label="Zavřít">
                        <img
                            src="/cross.svg"
                            width="24"
                            height="24"
                            alt="zavrit"
                        />
                    </button>
                {/if}
            </header>
        {/if}

        <section class="dialog-content">
            <slot name="content">
                <slot />
            </slot>
        </section>

        {#if $$slots.footer}
            <footer class="dialog-footer">
                <slot name="footer" />
            </footer>
        {/if}
    </div>
</dialog>

<style>
    dialog {
        outline: none;
        border: none;
        z-index: 300;

        border-radius: 10px;
        background: linear-gradient(180deg, hsl(220 18% 12%) 0%, hsl(220 20% 10%) 100%);

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

        max-width: 90vw;
        width: max-content;

        @media only screen and (max-width: 500px) {
            max-width: 100%;
            width: 100%;
            height: 100%;
            max-height: 100%;
            border-radius: 0;

            .dialog-container {
                justify-self: center;
                max-height: 100%;
                height: 100%;
                max-width: 100%;
                width: 100%;
            }
        }
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }

    .dialog-container {
        display: flex;
        flex-direction: column;
        min-width: 300px;
        max-width: 90vw;
        max-height: 90vh;
    }

    .dialog-header {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #ddd;
    }

    .dialog-header h2 {
        margin: 0;
        font-size: 1.1rem;
    }

    .close-button {
        display: inline-flex;
        background: none;
        border: none;
    }

    .dialog-content {
        padding: 1rem 2rem;
        overflow-y: auto;
    }

    .dialog-footer {
        padding: 0.75rem 1rem;
        border-top: 1px solid #ddd;
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
    }
</style>
