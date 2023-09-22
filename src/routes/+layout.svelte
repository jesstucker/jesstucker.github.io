<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<main>
		<Header />
		<slot />
	</main>
</div>

<style>
	.app {
		/* display: flex; */
		/* flex-direction: column; */
		/* min-height: 100vh; */
	}

	main {
		/* padding: 1rem; */
		/* margin: 0 auto; */
		box-sizing: border-box;
	}
</style>
