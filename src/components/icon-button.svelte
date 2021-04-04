<script>
    export let icon;
    export let size = 'regular';
</script>

<button class="icon-button container" on:click>
    <img
        src={`/icons/${icon}.svg`}
        class={`icon ${size}`}
        alt={`${icon} icon`}
    />
</button>

<style>
    .container {
        background-color: var(--accent-color);
        display: flex;
        flex-direction: column; 
        padding: 0;
        margin: 0;
    }

    :global(.icon-button.container .icon) {
        height: 3rem;
        width: 3rem;
        color: white;
    }

    :global(.icon-button.container .icon) {
        height: 3rem;
        width: 3rem;
        color: white;
    }

    :global(.icon-button.container .icon.small) {
        height: 1.5rem;
        width: 1.5rem;
        color: white;
    }
</style>
