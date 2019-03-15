<template>

    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <!--<li class="nav-item active">-->
                        <!--<router-link class="nav-link" to="/">Home</router-link>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<router-link class="nav-link" :to="'/cars'">Cars</router-link>-->
                    <!--</li>-->

                    <router-link tag="li" class="nav-item" exact to="/" active-class="active">
                        <a class="nav-link">Home</a>
                    </router-link>

                    <router-link tag="li" class="nav-item" to="/cars" active-class="active">
                        <a class="nav-link">Cars</a>
                    </router-link>

                    <router-link tag="li" class="nav-item" to="/car/3" active-class="active">
                        <a class="nav-link">Car 3</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/car/5" active-class="active">
                        <a class="nav-link">Car 5</a>
                    </router-link>

                </ul>
            </div>
        </nav>

        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
