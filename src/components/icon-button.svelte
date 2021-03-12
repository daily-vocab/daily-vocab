<script>
    import Icon from "svelte-awesome/components/Icon.svelte";

export let icon;
</script>

<button class="container" on:click>
    <Icon data={icon} scale={2} class="icon"/>
</button>

<style>
    .container {
        background-color: var(--accent-color);
        display: flex;
        flex-direction: column;
        border-radius: 2rem;
        padding: 0;
        margin: 0;
    }

    :global(.container .icon) {
        padding: 0.5rem;
        height: 2rem;
        width: 2rem;
    }

    :global(.container .icon > path) {
        color: white;
    }
</style>
