<script>
    export let icon;
</script>

<button class="container" on:click>
    <img src={`/icons/${icon}.svg`} class="icon" alt={`${icon} icon`}/>
</button>

<style>
    .container {
        background-color: var(--accent-color);
        display: flex;
        flex-direction: column; 
        padding: 0;
        margin: 0;
    }

    :global(.container .icon) {
        height: 3rem;
        width: 3rem;
        color: white;
    }
</style>
