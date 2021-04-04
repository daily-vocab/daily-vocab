<script>
  import { faPlus } from "@fortawesome/free-solid-svg-icons";
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import IconButton from './icon-button.svelte';

</script>

<Meta
  title="Components/IconButton"
  component={IconButton}
/>

<Template let:args>
  <IconButton icon={faPlus}/>
</Template>

<Story name="Add" />