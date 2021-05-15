<script>
  import { changelog } from "../../../changelog.json";

</script>

<section class="changelog">
  <h1>changelog</h1>
  {#each changelog as log}
    <h2>{log.version}</h2>
    <ul>
      {#each log.changes as change}
        <li>{change}</li>
      {/each}
    </ul>
  {/each}
</section>

<style>
  h2 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 0;
  }

</style>
