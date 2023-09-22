<script>
	import { page } from '$app/stores';
	import A from '$lib/components/A.svelte';
	import SelfPortrait from '$lib/components/SelfPortrait.svelte';
</script>

<header class="inline-block sticky sm:fixed top-0 bg-white z-10">
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<A href="/">
					<div class="w-14">
						<SelfPortrait />
					</div>
				</A>
			</li>
			<li aria-current={$page.url.pathname === '/export' ? 'page' : undefined}>
				<div class="text-md sm:text-lg">
					<A href="/export">Export</A>
				</div>
			</li>
		</ul>
	</nav>
</header>

<style>

</style>
