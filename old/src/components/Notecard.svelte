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
        width: 34em;
        background-color: #f3edea59;
        transition: box-shadow 0.45s ease, transform 0.45s ease;
        box-shadow: 0.4em 0.6em 0.6em 2px #81818129;
        border: 1px dotted rgba(201, 197, 191, 0.404);
    }
    .notecard:hover {
        box-shadow:  0.4em 0.6em 2.6em 2px #00000017;
    }

    .l-title {
        height: 6em;
        border-bottom: 1.5px solid pink;
        /* border-image: linear-gradient(to bottom, transparent 16.5%, rgba(253, 65, 55, 0.251) 16.85% 100%); */
        border-image-slice: 1;
        display: flex;
        justify-content: center; 
    }

    .title {
        align-self: flex-end;
    }
    
    .body {
        background-image: linear-gradient(rgba(88, 215, 229, 0.103) .15em, transparent .15em);
        background-size: 100% 2em;
        padding: 2.1em 2em;
        min-height: 45em;
        line-height: 2em;
    }
</style>