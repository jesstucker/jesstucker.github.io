<script>
	export let audioData;

</script>


<section>
	<ul>
		{#each audioData as {name, url}, i}
		<li data-track-id={i}
				on:click>
			{name}</li>
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
		/* border-bottom: 1px solid #ddd; */
		cursor: pointer;
	}
	
	li:active, li:hover {
		background-color: #FBF71955;
	}
	
</style>