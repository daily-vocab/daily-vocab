<script>
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import IconButton from '../../../components/icon-button.svelte';

  let word = ''
  let usage = ''
</script>
<section class="container">
  <h1>add a new word</h1>

  <form>
    <div>what's the word?</div>
    <input type='text' bind:value={word} on:input={() => word = word.toLowerCase()}/>
    <div>let's use it in a sentence</div>
    <input type='text' bind:value={usage} on:input={() => usage = usage.toLowerCase()} />
  </form>

  <IconButton icon={faCheck}/>
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

  input {
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin: 1rem 0;
    align-self: stretch;
    padding: 0.25rem 1rem; 
    color: black;
  }

  :global(.container button) {
    align-self: flex-end;
  }
</style>