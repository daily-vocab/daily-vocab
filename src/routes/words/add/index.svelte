<script>
  import { goto } from "@sapper/app";
  import { tick } from 'svelte';
  import IconButton from '../../../components/icon-button.svelte';
  import Info from "../../../components/info.svelte";
  import { vocab } from '../../../stores/vocab';
  import { vocabSchema } from '../../../utils/word-validator';

  let word = ''
  let usage = ''
  let validationMessage = null
  let touched = false;

  const handleAddVocab = async (event) => {
    event.preventDefault();
    vocab.addVocab({
      word, 
      usage
    })
    await goto('home')
  }

  const validateInputs = async () => {
    try {
      touched = true
      await vocabSchema.validate({
        word, usage
      })
      validationMessage = null;
    }
    catch(error) {
      validationMessage = error.message
    }
  }
</script>
<section class="container words-add">
  <h1>add a new word</h1>

  {#if validationMessage === null}
    <Info
      message='no issues so far'
      icon='tick--light'
      type='success' />
  {:else}
    <Info
      message={validationMessage}
      type='warn'
      icon='warn--light' />
  {/if}
  <form>
    <div>what's the word?</div>
    <input type='text' bind:value={word} on:input={async () => { await tick(); word = word.toLowerCase(); validateInputs() }}/>
    <div>let's use it in a sentence</div>
    <textarea class='usage-input' type='text' bind:value={usage} on:input={async () => {await tick();usage = usage.toLowerCase();validateInputs() }} />
    {#if !touched || validationMessage !== null}
      <IconButton icon='warn' on:click={(event) => {event.preventDefault();}}/>
    {:else}
      <IconButton icon='tick' on:click={handleAddVocab}/>
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

  input, textarea {
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin: 1rem 0;
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
    position:absolute;
    bottom: 1rem;
    margin: 1rem;
    right: 1rem;
  }
</style>