<script>
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import IconButton from './icon-button.svelte';

</script>

<Meta
  title="Components/IconButton"
  component={IconButton}
  argTypes={{
    icon: { 
      control: {
        type: 'select',
        options: ['add', 'warn', 'tick']
      }
    },
    onClick: { action: 'onClick'}
  }}
/>

<Template let:args>
  <IconButton icon={args.icon} on:click={args.onClick} />
</Template>

<Story name="Main" args={{icon: 'add'}} />