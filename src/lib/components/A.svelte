<script>
    import { resolve } from '$app/paths';
	import { page } from '$app/state';
    export let href = '';
</script>

<a href={resolve(href)} class:active={page.url.pathname === href} >
    <slot></slot>
</a>

<style>
    a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-size: inherit;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;	
	}

	a:hover {
		color: var(--color-theme-1);
	}
	a.active {
		color: rgb(171, 130, 137);
	}
</style>