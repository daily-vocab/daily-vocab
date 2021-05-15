<script>
  import { fade } from "svelte/transition";

</script>

<div class="cmp-alert" in:fade out:fade>
  <div class="alert-window">
    <slot />
  </div>
</div>

<style>
  .cmp-alert {
    display: flex;
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(0.25rem);
    -webkit-backdrop-filter: blur(0.25rem);
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }

  .alert-window {
    height: auto;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #b1d0ff55;
    box-shadow: 0.25rem 0.25rem 1rem rgb(194, 194, 194);
  }

  @supports (not (backdrop-filter: 0.25rem)) {
    .cmp-alert {
      background-color: #7ca8eb99;
    }

    .alert-window {
      box-shadow: none;
      background-color: unset;
    }
  }

</style>
