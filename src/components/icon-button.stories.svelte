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
    size: { 
      control: {
        type: 'select',
        options: ['small', 'regular']
      }
    },
    onClick: { action: 'onClick'}
  }}
/>

<Template let:args>
  <IconButton {...args} on:click={args.onClick} />
</Template>

<Story name="Main" args={{icon: 'add', size: 'regular'}} />