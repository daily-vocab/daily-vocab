<!-- Maybe add some transitions here to making a svelte component for this -->

<div class="container">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dot {
        height: 0.5rem;
        width: 0.5rem;
        margin: 0.25rem;
        border-radius: 1rem;
        background-color: var(--accent-color);
    }
</style>