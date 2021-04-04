<script>
  import { goto } from "@sapper/app";
  import { tick } from 'svelte';
  import IconButton from '../../../components/icon-button.svelte';
  import { vocab } from '../../../stores/vocab';
  import { vocabSchema } from '../../../utils/word-validator';



  let word = ''
  let usage = ''
  let validationMessage = null

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
      validationMessage = '';
      await vocabSchema.validate({
        word, usage
      })
    }
    catch(error) {
      validationMessage = error.message
    }
  }
</script>
<section class="container words-add">
  <h1>add a new word</h1>

  {validationMessage}
  <form>
    <div>what's the word?</div>
    <input type='text' bind:value={word} on:input={async () => { await tick(); word = word.toLowerCase(); validateInputs() }}/>
    <div>let's use it in a sentence</div>
    <textarea class='usage-input' type='text' bind:value={usage} on:input={async () => {await tick();usage = usage.toLowerCase();validateInputs() }} />
    <IconButton icon='tick' on:click={handleAddVocab}/>
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

  :global(.words-add button) {
    align-self: flex-end;
    position:absolute;
    bottom: 1rem;
    margin: 1rem;
    right: 1rem;
  }
</style>