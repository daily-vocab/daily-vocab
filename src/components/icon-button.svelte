<script>
    export let icon;
    export let size = "regular";
    export let iconColor = "var(--accent-color)";
    import AddIcon from "../icons/add.svelte";
    import CopyIcon from "../icons/copy.svelte";
    import DeleteIcon from "../icons/delete.svelte";
    import EditIcon from "../icons/edit.svelte";
    import TickIcon from "../icons/tick.svelte";
    import WarnIcon from "../icons/warn.svelte";

    const iconMap = {
        add: AddIcon,
        copy: CopyIcon,
        delete: DeleteIcon,
        edit: EditIcon,
        tick: TickIcon,
        warn: WarnIcon,
    };

</script>

<button
    class={`icon-button ${icon}-icon icon--${size}`}
    on:click
    style={`--dv-icon-color: ${iconColor}`}
>
    <svelte:component this={iconMap[icon]} />
</button>

<style>
    button {
        background-color: var(--accent-color);
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }
    :global(.icon-button.icon--small svg) {
        height: 2rem;
        width: 2rem;
    }

    :global(.icon-button svg) {
        height: 3rem;
        width: 3rem;
    }

</style>
