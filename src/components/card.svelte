<div class="container">
    <slot />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: var(--bg-color);
        border-radius: 1rem;
    }
</style>
