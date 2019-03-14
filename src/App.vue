<template>
    <div>

        <h2>Form input</h2>
            <input type="text" v-model.lazy="name">
            <p>{{ name }}</p>

        <hr>

            <textarea v-model="textarea">{{ textarea }}</textarea>
            <p>{{ textarea }}</p>

        <hr>

            <label>
                <input type="checkbox" value="instagram" v-model="social"> Instagram
            </label>
            <label>
                <input type="checkbox" value="vk" v-model="social"> VK
            </label>
            <label>
                <input type="checkbox" value="facebook" v-model="social"> Facebook
            </label>

            <ul>
                <li v-for="s in social">{{ s }}</li>
            </ul>

        <hr>


            <label>
                <input type="radio" value="instagram" v-model="socialRadio"> Instagram
            </label>
            <label>
                <input type="radio" value="vk" v-model="socialRadio"> VK
            </label>
            <label>
                <input type="radio" value="facebook" v-model="socialRadio"> Facebook
            </label>

            <p>{{ socialRadio }}</p>


        <hr>


        <select v-model="social1">
            <option v-for="soc in socList">{{soc}}</option>
        </select>
        <p>{{ social1 }}</p>



    </div>

</template>

<script>

    export default {
        data() {
            return {
                name: '',
                textarea: 'I am initial commit',

                social: ['vk'],

                socialRadio: 'facebook',

                defaultSocial: 'vk',
                social1: 'instagram',
                socList: ['vk', 'instagram', 'facebook']
            }
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
