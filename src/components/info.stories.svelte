<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Info from "./info.svelte";

</script>

<Meta title="Components/Info" component={Info} />

<Template let:args>
  <Info message={args.message} type={args.type} icon={args.icon} />
</Template>

<Story
  name="Warning"
  args={{
    type: "warn",
    message: "word is required field",
    icon: "warn",
  }}
/>

<Story
  name="NoIssues"
  args={{
    type: "success",
    message: "no issues so far",
    icon: "tick",
  }}
/>
