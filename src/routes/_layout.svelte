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
	@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap");

	:root {
		--accent-color: #3d84ee;
		--accent-color1: #3476d8;
		--bg-color: #7dadf437;

		--light-gradient-bg: linear-gradient(to bottom, #aecfff, #ffffff, #ffffff);
	}

	/* normalize */

	:global(body) {
		margin: 0;
		color: var(--accent-color);
	}

	:global(*) {
		font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
		font-weight: 300;
	}
	/* global styles for tag names */

	:global(button) {
		font-weight: 800;
		background-color: #7dadf437;
		border: none;
		padding: 1rem 2rem;
		border-radius: 4rem;
		font-size: 0.8rem;
		transition: transform 0.2s linear, background-color 0.2s linear;
		color: var(--accent-color);
	}

	:global(button.primary) {
		background-color: #7ca8eb;
		color: white;
	}

	:global(button:active) {
		background-color: #588ad537;
		transform: translateY(0.25rem);
	}

	main {
		display: flex;
		flex-direction: row;

		height: 100vh;
		max-width: 56rem;
		background: var(--light-gradient-bg);
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
