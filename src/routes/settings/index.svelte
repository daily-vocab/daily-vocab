<script>
  import { onMount } from "svelte";
  import IconButton from "../../components/icon-button.svelte";
  import { vocab } from "../../stores/vocab";
  let empty = false;

  onMount(async () => {
    await vocab.loadVocab();
    if ($vocab.length === 0) {
      empty = true;
    }
  });

  const clearAllVocabs = async () => {
    await vocab.clearVocabs();
    empty = true;
  };

  const exportMyVocabs = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify($vocab));
      alert("copied your vocabs into the clipboard! 😃");
    } catch (_) {
      alert("unable to export your vocabs 😭");
    }
  };

</script>

<section>
  <h1>settings</h1>

  <div class="setting">
    <p>clear all vocabs</p>
    <IconButton
      icon="delete"
      size="small"
      textColor="white"
      on:click={() => clearAllVocabs()}
      disabled={empty}
    />
    <!-- class:empty -->
  </div>

  <div class="setting">
    <p>export my vocabs</p>
    <IconButton icon="copy" size="small" on:click={() => exportMyVocabs()} />
  </div>
</section>

<style>
  .setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 2rem;
    width: 2rem;
  }

  button.empty {
    filter: grayscale(100%);
  }

</style>
