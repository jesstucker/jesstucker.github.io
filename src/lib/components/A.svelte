<script>
    import { base } from '$app/paths';
    export let href = '';
</script>

<a href="{base}{href}" >
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
</style>