<script>
  import { onMount } from "svelte";
  import Alert from "../../components/alert.svelte";
  import IconButton from "../../components/icon-button.svelte";
  import { vocab } from "../../stores/vocab";
  let empty = false;
  let showClearVocabConfirmation = false;

  onMount(async () => {
    await vocab.loadVocab();
    if ($vocab.length === 0) {
      empty = true;
    }
  });

  const clearAllVocabs = async () => {
    await vocab.clearVocabs();
    empty = true;
    showClearVocabConfirmation = false;
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

<section class="settings">
  <h1>settings</h1>

  <div class="setting">
    <p>clear all vocabs</p>
    <IconButton
      icon="delete"
      size="small"
      textColor="white"
      iconColor={empty ? "gray" : undefined}
      on:click={() => (!empty ? (showClearVocabConfirmation = true) : null)}
      disabled={empty}
    />
  </div>

  <div class="setting">
    <p>export my vocabs</p>
    <IconButton icon="copy" size="small" on:click={() => exportMyVocabs()} />
  </div>

  {#if showClearVocabConfirmation}
    <Alert>
      <h1>confirmation</h1>
      <p>are you sure you want to clear all your vocabs?</p>

      <div class="confirmation-actions">
        <IconButton
          icon="tick"
          iconColor="#F4676F"
          on:click={() => clearAllVocabs()}
        />
        <IconButton
          icon="incorrect"
          iconColor="gray"
          on:click={() => (showClearVocabConfirmation = false)}
        />
      </div>
    </Alert>
  {/if}
</section>

<style>
  .setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .confirmation-actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  :global(section.settings .confirmation-actions button) {
    margin: 0.5rem 0.25rem;
  }

  h1 {
    font-weight: 800;
  }

</style>
