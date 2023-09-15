<script>
	export let progress;
</script>

<div id="progress-bar-cont">
	<div id="bar" style="width: {progress}%"></div>
</div>

<style>
	#progress-bar-cont {
		width: 100%;
		display: flex;
		cursor: pointer;
	}

	#bar {
		width: 0%;
		height: 10px;
		background: linear-gradient(to left, #FBF71955, #FBF719);
	}
</style>