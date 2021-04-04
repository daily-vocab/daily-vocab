<script>
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import IconButton from './icon-button.svelte';




</script>

<Meta
  title="Components/IconButton"
  component={IconButton}
  argTypes={{
    icon: { control: 'text' }
  }}
/>

<Template let:args>
  <IconButton icon={args.icon}/>
</Template>

<Story name="Add" args={{icon: 'add'}}/>