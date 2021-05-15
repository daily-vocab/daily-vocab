<script>
  import IconButton from "./icon-button.svelte";

  export let type;
  export let icon;
  export let iconColor;
  export let message;

</script>

<div class={`info container ${type}`}>
  <IconButton {icon} size="small" {iconColor} />
  <div class="message">{message}</div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 1rem;
    background-color: var(--accent-color);
    padding: 0.5rem;
  }

  .message {
    margin: 0.25rem 0.5rem;
    color: black;
    font-weight: 800;
  }

  .warn {
    background-color: #f3cd69;
  }

  .success {
    background-color: #4aaa5f;
  }

  :global(.info .icon-button) {
    margin: 0 0.2rem;
  }

</style>
