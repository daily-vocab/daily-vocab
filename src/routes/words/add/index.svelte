<script>
  import { goto } from "@sapper/app";
  import { onMount, tick } from "svelte";
  import IconButton from "../../../components/icon-button.svelte";
  import Info from "../../../components/info.svelte";
  import { vocab } from "../../../stores/vocab";
  import { vocabSchema } from "../../../utils/word-validator";
  import * as queryString from "query-string";

  onMount(async () => {
    const parsedQueryString = queryString.parse(location.search);
    await vocab.loadVocab();

    if (parsedQueryString.id) {
      const matchingVocab = $vocab.find((v) => v.id === parsedQueryString.id);
      if (matchingVocab) {
        vocabId = parsedQueryString.id;
        word = matchingVocab.word;
        usage = matchingVocab.usage;
        notes = matchingVocab.notes;
      }
    }
  });

  let vocabId;
  let word = "";
  let usage = "";
  let notes = "";
  let validationMessage = null;
  let touched = false;

  const handleAddVocab = async (event) => {
    event.preventDefault();
    vocab.addVocab({
      id: vocabId,
      word: word.trim(),
      usage: usage.trim(),
      notes: notes.trim(),
    });
    await goto("home", { replaceState: true });
  };

  const validateInputs = async () => {
    try {
      touched = true;
      await vocabSchema.validate({
        word,
        usage,
      });
      validationMessage = null;
    } catch (error) {
      validationMessage = error.message;
    }
  };

</script>

<section class="container words-add">
  {#if !vocabId}
    <h1>add a new word</h1>
  {:else}
    <h1>edit a word</h1>
  {/if}

  {#if !touched}
    <Info message={"let's go"} icon="warn--light" type="warn" />
  {:else if validationMessage}
    <Info message={validationMessage} type="warn" icon="warn--light" />
  {:else}
    <Info message={"looks like we're good"} type="success" icon="tick--light" />
  {/if}
  <form>
    <p>what's the word?</p>
    <input
      type="text"
      bind:value={word}
      on:input={async () => {
        await tick();
        word = word.toLowerCase();
        validateInputs();
      }}
      on:focusout={async () => {
        await tick();
        word = word.trim();
      }}
    />
    <p>let's use it in a sentence</p>
    <textarea
      class="usage-input"
      type="text"
      bind:value={usage}
      on:input={async () => {
        await tick();
        usage = usage.toLowerCase();
        validateInputs();
      }}
    />
    <p>explanation and notes (optional)</p>
    <textarea
      class="usage-input"
      type="text"
      bind:value={notes}
      on:input={async () => {
        await tick();
        usage = usage.toLowerCase();
        validateInputs();
      }}
    />
    {#if !touched || validationMessage !== null}
      <IconButton
        icon="warn"
        on:click={(event) => {
          event.preventDefault();
        }}
      />
    {:else}
      <IconButton icon="tick" on:click={handleAddVocab} />
    {/if}
  </form>
</section>

<style>
  .container {
    background-color: var(--bg-color);
  }

  form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 0.25rem;
  }

  input,
  textarea {
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    align-self: stretch;
    padding: 0.25rem 1rem;
    color: black;
  }

  .usage-input {
    flex-grow: 1;
    margin-bottom: 0;
  }

  :global(.words-add form button) {
    align-self: flex-end;
    position: absolute;
    bottom: 1rem;
    margin: 1rem;
    right: 1rem;
  }

</style>
