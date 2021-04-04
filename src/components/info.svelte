<script>
  import IconButton from './icon-button.svelte';



  export let type;
  export let icon
  export let message;
</script>

<div class={`container ${type}`}>
  <IconButton {icon}/>
  <div class='message'>{message}</div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: 1.5rem;
    background-color: var(--accent-color);
  }

  .message {
    margin: 0.25rem 0.5rem;
    color: black;
    font-weight: 800;
  }

  .warn {
    background-color: #F3CD69;
  }

  .success {
    background-color: #4AAA5F
  }
</style>