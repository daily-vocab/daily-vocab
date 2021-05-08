<script>
	import { onMount } from "svelte";
	import { vocab } from "../stores/vocab";

	onMount(async () => {
		await vocab.loadVocab();
	});
</script>

<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: row;

		height: 100vh;
		max-width: 56rem;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(main > section) {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
	}
</style>
