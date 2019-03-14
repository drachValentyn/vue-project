<template>
    <div>

        <h2>Form input</h2>
        <!--<input type="text" v-model.number="age">-->
        <!--<p>{{ age }}</p>-->

        <!--<hr>-->


        <app-onoff v-model="switched"></app-onoff>


        <div>
            <h3 v-if="switched">Component is enabled</h3>
            <h3 v-else>Component is disabled</h3>
        </div>


    </div>

</template>

<script>

    import Onoff from './Onoff'

    export default {
        data() {
            return {
                age: 20,
                switched: true
            }
        },
        watch: {
            age(value) {
                console.log(value);
                console.log(typeof value)
            }
        },
        components: {
            appOnoff: Onoff
        }

    }

</script>

<style scoped>

    textarea{
        height: 100px;
        width: 400px;
    }

    p{
        white-space: pre;
    }

</style>
