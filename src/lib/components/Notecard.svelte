<script>

</script>

<div class="notecard" >
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
        box-shadow: 0.1em 0.1em 0.2em 1px #8181811c;
        border: 1px dotted rgba(201, 197, 191, 0.404);
        display: flex;
        flex-direction: column;
    }
    .notecard:hover {
        box-shadow:  0.4em 0.6em 2.6em 2px #00000017;
    }

    .l-title {
        height: calc(9/16 *1in);
        border-bottom: 1.5px solid pink;
        /* border-image: linear-gradient(to bottom, transparent 16.5%, rgba(253, 65, 55, 0.251) 16.85% 100%); */
        /* border-image-slice: 1; */
        display: flex;
        justify-content: center; 
    }

    .title {
        align-self: flex-end;
    }

    .body {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        line-height: 0.25in;
        padding: 0.0625in 0.125in 0;
        box-sizing: border-box;
    }
    
    .body::before {
        position: absolute;
        content: "";
        top: 0.25in;
        left: 0;
        background-image: linear-gradient(rgba(88, 215, 229, 0.135) 1.5px, transparent 1.5px);
        background-size: 100% 0.25in;
        height: 100%;
        width: 100%;
    }
</style>