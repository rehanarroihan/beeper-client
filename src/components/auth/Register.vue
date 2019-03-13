<template>
    <div>
        <h3 class="text-center">Register</h3>

        <div class="form-group">
            <input  type="email" class="form-control" v-model="user.email" placeholder="Email address">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="user.username" placeholder="Username">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="user.password" placeholder="Password">
        </div>

        <hr>

        <button class="btn btn-lg btn-primary btn-block" @click="register()">Register</button>

        <p class="text-center m-t-20">
            Already have an account? <router-link to="/auth/login">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Register',
    data: function() {
        return {
            user: {
                email: "",
                username: "",
                password: ""
            }
        }
    },
    methods: {
        register() {
            const self = this;
            const {email, username, password} = this.user;
            axios.post(`http://${process.env.VUE_APP_API_BASE_URL}/users`, {
                username,
                email,
                password
            }).then(function(data) {
                self.$router.push('/auth/login');
                alertify.success("Registration successful!");
            }).catch(function(err) {
                if(err.response.status == 422) {
                    err.response.data.errors.forEach(function(e) {
                        alertify.error(e);
                    });
                }
            }); 
        },
    },
}
</script>

<style scoped>

</style>
