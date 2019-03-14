<template>
    <div class="car">
        <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
        <p>Year: {{ carYear }}</p>
        <button @click="changeName">Change Name</button>
        <button @click="changeFunc()">Change From Parent</button>
        <button @click="updateCounter">Update Counter</button>
    </div>
</template>

<script>

    import {eventEmitter} from './main'

    export default {
        //props: ['carName', 'carYear'],
        props:{
            carName: {
                type: String,
                default: 'Default name'
            },
            carYear: Number,
            changeFunc: Function,
        },
        computed: {
          reverseName(){
              return this.carName.split('').reverse().join('')
          }
        },
        data(){
            return {
                carName: 'Ford',
                carYear:  2015
            }
        },
        methods: {
            changeName() {
                this.carName = 'Mazda';
                this.$emit('nameChanged', this.carName)
            },
            updateCounter() {
                //this.$emit('counterUpdated', this.counter+1)
                eventEmitter.$emit('counterUpdated')
            }
        }
    }
</script>

<style>
    .car{
        border: 1px solid black;
    }
    .car h3{
        margin-bottom: 5px;
    }
</style>