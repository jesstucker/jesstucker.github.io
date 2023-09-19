<script lang="ts">
	import { onMount } from "svelte";

    let body: HTMLDivElement;
    let cardHeight = 0;
    

    onMount( () => cardHeight = body.scrollHeight )
</script>

<div class="notecard" >
    <div class="l-title">
        <div class="title">
            <slot name="title"></slot>
        </div>
    </div>
    <div class="body" bind:this={body}>
        <div class="bg-body" style="height: {cardHeight}px" ></div>
        <slot name="body"></slot>
    </div>
</div>

<style>
    .notecard {
        font-family: "CMU Monospace";
        height: 5in;
        width: 3in;
        background-color: #f8f4f3f2;
        transition: box-shadow 0.45s ease, transform 0.15s linear;
        box-shadow:  0.4em 0.6em 2.6em 2px #00000002;
        border: 1px dotted rgba(201, 197, 191, 0.404);
        display: flex;
        flex-direction: column;
    }
    .notecard:hover {
        box-shadow: 0.1em 0.1em 0.2em 1px #81818110;
    }

    .l-title {
        height: calc(9/16 *1in);
        border-bottom: 1.5px solid #FFC0CB;
        display: flex;
        justify-content: center;
        padding: 0.125in 0 0 0;
        top:0;
        background-color: #f8f4f3f2;
        z-index: 1;
    }

    .title {
        align-self: flex-end;
        width: 100%;
    }

    .body {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: scroll;
        line-height: 0.25in;
        padding: 0.0625in 0.125in 0;
        box-sizing: border-box;
        z-index: 0;
    }

    .body::-webkit-scrollbar {
        display: none;
    }

    .bg-body {
        position: absolute;
        content: "";
        top: 0.25in;
        left: 0;
        background-image: linear-gradient(rgba(88, 215, 229, 0.135) 1.5px, transparent 1.5px);
        background-size: 100% 0.25in;
        width: 100%;
        z-index: -1;
    }
</style>