<script>
  import { Template, Story, Meta } from "@storybook/addon-svelte-csf";
  import Accordion from "./accordion.svelte";

</script>

<Meta title="Components/Accordion" component={Accordion} />

<Template let:args>
  <Accordion>
    <div slot="header">lol</div>
    <div slot="content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati dolore
      quisquam, iure omnis in dignissimos ad officia dicta eveniet autem! Ab
      rerum unde iure deleniti voluptatum. Animi mollitia nisi officiis. Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati dolore
      quisquam, iure omnis in dignissimos ad officia dicta eveniet autem! Ab
      rerum unde iure deleniti voluptatum. Animi mollitia nisi officiis. Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati dolore
      quisquam, iure omnis in dignissimos ad officia dicta eveniet autem! Ab
      rerum unde iure deleniti voluptatum. Animi mollitia nisi officiis.
    </div>
  </Accordion>
</Template>

<Story name="Default" />
