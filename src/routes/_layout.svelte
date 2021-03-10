<script>
	export let segment;
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
	}
</style>
