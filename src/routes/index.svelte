<script>
	import { goto } from "@sapper/app";
	import { version } from "../../package.json";

</script>

<svelte:head>
	<title>daily-vocab</title>
</svelte:head>

<section>
	<h1>daily vocab!</h1>
	<p>Learn a new word everyday!</p>
	<button
		class="primary"
		on:click={async () => {
			await goto("home");
		}}>Get Started</button
	>
	<button
		on:click={async () => {
			await goto("settings");
		}}>Settings</button
	>
	<p class="version">v{version}</p>
</section>

<style>
	p {
		font-size: 1.25rem;
		text-transform: lowercase;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;

		align-self: center;
	}

	h1 {
		text-align: center;
		margin: 0 auto;
		font-size: 3rem;
		text-transform: lowercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	button {
		margin: 0.5rem;
		width: 50%;
	}

	.version {
		font-size: 0.8rem;
		font-weight: 800;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

</style>
