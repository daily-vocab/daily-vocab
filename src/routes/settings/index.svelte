<script>
  import { onMount } from "svelte";
  import { vocab } from "../../stores/vocab";
  let empty = false;

  onMount(() => {
    if ($vocab.length === 0) {
      empty = true;
    }
  });

  const clearAllVocabs = async () => {
    await vocab.clearVocabs();
    empty = true;
  };
</script>

<section>
  <h1>settings</h1>

  <div class="setting">
    <p>clear all vocabs</p>
    <button on:click={() => clearAllVocabs()} class:empty disabled={empty}>
      <img src="icons/delete--color.svg" alt="clear all vocab icon button" />
    </button>
  </div>
</section>

<style>
  .setting {
    display: flex;
    justify-content: space-between;
  }
  button {
    padding: 0;
    align-self: center;
  }

  button.empty {
    filter: grayscale(100%);
  }
</style>
