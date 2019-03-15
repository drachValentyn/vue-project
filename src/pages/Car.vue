<template>
    <div>
        <h1>Car id {{ id }}</h1>

        <button class="btn btn-sm btn-primary mb-3" @click="goBackToCars">Back</button>

        <br>

        <!--<router-link-->
                <!--class="btn btn-info"-->
                <!--tag="button"-->
                <!--:to="'/car/'+ id +'/full'"-->

        <!--&gt;Full info</router-link>-->

        <router-link
                class="btn btn-info"
                tag="button"
                :to="{name: 'carFull', params: {id: id}}"

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
        }
    }
</script>

<style scoped>

</style>