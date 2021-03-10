<svelte:head>
	<title>daily-vocab</title>
</svelte:head>

<section>
	<h1>daily vocab!</h1>
	<p>Learn a new word everyday!</p>
	<button>Get Started</button>
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

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
