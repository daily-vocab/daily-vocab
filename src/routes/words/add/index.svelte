<section class="container">
  <h1>add a new word</h1>

  <form>
    <div>what's the word?</div>
    <input type='text'/>
    <div>let's use it in a sentence</div>
    <input type='text'/>
  </form>
</section>

<style>
  .container {
    background-color: var(--bg-color);
  }

  form {
    display: flex;
    flex-direction: column;
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
</style>