<template>
    <div>
        <h1>Car id {{ id }}</h1>

        <button class="btn btn-sm btn-primary mb-3" @click="goBackToCars">Back</button>

        <br>

        <router-link
                class="btn btn-info"
                tag="button"
                :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2020}, hash: '#scroll'}"

        >Full info</router-link>

        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                //id: this.$router.currentRoute.params['id']
                id: this.$route.params['id']
            }
        },
        watch: {
            $route(toR, fromR) {
                this.id = toR.params.id
            }
        },
        methods: {
            goBackToCars() {
                this.$router.push('/cars')
            }
        },
        beforeRouteLeave(to, fromR, next) {
            console.log('beforeRouteLeave');

            if (window.confirm('Are you sure to leave?')) {
                next()
            } else {
                next(false)
            }
        }
    }
</script>

<style scoped>

</style>