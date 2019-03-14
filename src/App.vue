<template>
    <div class="container">

        <form class="pt-5">
            <div class="form-group">
                <label for="email">Email</label>
                <input
                        type="email"
                        id="email"
                        class="form-control"
                        :class="{'is-invalid': $v.email.$error}"
                        @blur="$v.email.$touch()"
                        v-model="email"
                >
                <div class="invalid-feedback" v-if="!$v.email.required">
                    Email field is required
                </div>
                <div class="invalid-feedback" v-if="!$v.email.email">
                    This field should be an email
                </div>
            </div>


            <div class="form-group">
                <label for="password">Password</label>
                <input
                        type="password"
                        id="password"
                        class="form-control"
                        :class="{'is-invalid': $v.password.$error}"
                        @blur="$v.password.$touch()"
                        v-model="password"
                >
                <div class="invalid-feedback" v-if="!$v.email.minLength">
                    Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
                </div>
            </div>

            <div class="form-group">
                <label for="confirm">Confirm password</label>
                <input
                        type="password"
                        id="confirm"
                        class="form-control"
                        :class="{'is-invalid': $v.confirmPassword.$error}"
                        @blur="$v.confirmPassword.$touch()"
                        v-model="confirmPassword"
                >
                <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
                    Password should match
                </div>
            </div>

        </form>

    </div>
</template>

<script>

    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',

            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6)
            },
            confirmPassword: {
                sameAs: sameAs((vue) => {
                    return vue.password
                })
            }
        }

    }
</script>

<style scoped>

</style>
