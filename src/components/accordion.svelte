<script>
  let contentBinding = null;

</script>

<button
  on:click={() => {
    if (contentBinding) {
      console.log({
        mac: contentBinding.style.maxHeight,
      });
      if (
        contentBinding.style.maxHeight === "" ||
        contentBinding.style.maxHeight === "0px"
      ) {
        contentBinding.style.maxHeight = `${contentBinding.scrollHeight}px`;
      } else {
        contentBinding.style.maxHeight = "0";
      }
    }
  }}
>
  <div class="header"><slot name="header" /></div>
  <div class="content" bind:this={contentBinding}>
    <slot name="content" />
  </div>
</button>

<style>
  button {
    border-radius: 0.25rem;
    width: 100%;
  }

  .header {
    font-size: 2rem;
    width: 100%;
  }

  .content {
    width: 100%;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s cubic-bezier(1, 0, 0, 1);
  }

</style>
