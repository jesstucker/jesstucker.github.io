<script>
	export let audioData;
	export let trackIndex
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
</script>


<section>
	<ul>
		{#each audioData as {name, url}, i}
			<li data-track-id={i}
				class:active={i === trackIndex}
					on:click={() => dispatch('trackChange', {trackIndex: i})}>
				{name}
			</li>
		{/each}
	</ul>
</section>

<style>	
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	
	li {
		line-height: 0.25in;
		cursor: pointer;
	}
	
	li:hover {
		background-color: #FBF71955;
	}

	.active {
		background-color: #F8F5AA;
		position: sticky;
		top: 0;
		bottom: 0;
	}
	
</style>