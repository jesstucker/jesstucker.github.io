<script lang="ts">
</script>

<div class="notecard origin-top" >
    <div class="l-title">
        <div class="title">
            <slot name="title"></slot>
        </div>
    </div>
    <div class="body">
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
        /* backface-visibility: hidden; */
        /* transform-style: preserve-3d; */
        /* transform: translateZ(0); */
        /* transform: scale(1.5) translateZ(0) translate3d(0,0,0); */
        /* transform-gpu */
        /* -webkit-transform: scale(1.5); */
        
        @screen lg {
            transform: matrix(1.5, 0, 0, 1.5, 0, 0);
        }
        /* transform: translate3d(0,0,0) scale(1.5); */
        /* transform-style: preserve-3d; */
        /* transform: matrix3d(1.5, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 1.5, -0.001, 0, 0, 0, 1); */
        /* -webkit-transform: matrix3d(1.5, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 1.5, -0.001, 0, 0, 0, 1); */
        /* -webkit-font-smoothing: subpixel-antialiased; */
        /* transform: translate(-50%, -50%) scale(2);  */
        /* zoom:0.5; */
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
        overflow: auto;
        line-height: 0.25in;
        box-sizing: border-box;
        z-index: 0;
        background-image: linear-gradient(rgba(88, 215, 229, 0.135) 1.5px, transparent 1.5px);
        background-size: 100% 0.25in;
        background-attachment: local;
        background-position-y: calc(0.25in - 1px);
    }

    .body::-webkit-scrollbar {
        display: none;
    }
</style>