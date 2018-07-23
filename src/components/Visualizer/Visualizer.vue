<template>
    <div class='visualizer' id="visualizer">
    </div>
</template>

<script>
import sketch from './p5visualizer.js'
import p5 from 'p5'

export default {
    data() {
        return {
            myp5: null,
        }
    },

    mounted() {
        this.myp5 = new p5(sketch, document.getElementById('visualizer'))
    },
}
</script>

<style scoped>
#visualizer {
    width: 100%;
    height:100%;
    z-index: -1;
    position: absolute;
}

</style>
