<script lang="ts">
	import { page } from '$app/stores';
	import A from '$lib/components/A.svelte';
	import SelfPortrait from '$lib/components/SelfPortrait.svelte';
	import { player, togglePlay, next, prev, formattedTimer } from '$lib/stores';
	let prevScroll = 0;
	let isScrollingDown = false;
	function checkScroll(e: UIEvent) {
		isScrollingDown = prevScroll < window.scrollY;
		prevScroll = window.scrollY;
	}

</script>

<svelte:window on:scroll={checkScroll} />

<header 
	class="inline-block sticky sm:fixed top-0  z-10
	{ isScrollingDown ? 'isScrollingDown' : 'isScrollingUp'}">
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<A href="/">
					<div class="w-24">
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
{#if $page.url.pathname !== '/'}
	<div class="flex flex-col align-middle justify-center">
		<div class="controls-buttons flex justify-center gap-1 mb-[0.0625in]">
			<button class="flex rotate-180 space-x-[1px] px-2 py-1" on:click={prev} aria-label="Previous Track">
				<div class="bar  origin-center scale-75"></div>
				<div class="triangle scale-75"></div>
				Prev
			</button>
			<button on:click={togglePlay} class="px-3 py-1" aria-label="Play"> 
				<div class="triangle" class:playing={!$player.paused}>{$player.paused ? 'Paused': 'Playing'} </div>
			</button>
			<button class="flex space-x-[1px] px-2  py-1" on:click={next} aria-label="Next Track">
				<div class="bar  origin-center scale-75"></div>
				<div class="triangle scale-75 "></div>
				Next
			</button>
		</div>
		<div class="self-center">
			{$formattedTimer}
		</div>
	</div>
{/if}

<style>
	header { transition: transform 0.2s ease-in-out }
	.isScrollingDown { transform: translateY(-100%) }
	.isScrollingUp { transform: translateY(0%) }

</style>
