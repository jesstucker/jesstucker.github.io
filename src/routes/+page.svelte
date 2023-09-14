<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Notecard from "$lib/components/Notecard.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Jess Tucker" />
</svelte:head>

<section>
	Jess Tucker
	<Notecard>
		<div slot="title">Jess</div>
		<div slot="body">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem officiis velit incidunt, dolorem ab perferendis repudiandae tempora aut minima quidem, quibusdam mollitia praesentium fugiat nobis itaque. Doloribus natus aliquid libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt non, voluptates necessitatibus sint exercitationem nesciunt et explicabo sit, dolores delectus praesentium labore! Unde a in praesentium necessitatibus. Ad, voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolores vero voluptates impedit quisquam nostrum reiciendis molestiae, odit provident maxime repellat amet est minima nihil sequi ratione facere dicta ipsum!
		</div>
	</Notecard>	
</section>

<style>

</style>
