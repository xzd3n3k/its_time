<script>
    export let dialog
</script>
<dialog bind:this={dialog} on:close>
    <slot/>
</dialog>

<style>
    dialog {
        outline: none;
        border: none;
        z-index: 300;

        padding: 1rem 2rem;
        border-radius: 10px;
        background: linear-gradient(180deg, hsl(220 18% 12%) 0%, hsl(220 20% 10%) 100%);

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }
</style>