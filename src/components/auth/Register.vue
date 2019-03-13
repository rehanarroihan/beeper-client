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
            const {email, username, password} = this.user;
            axios.post("http://localhost:9090/users", {
                username, 
                email, 
                password
            }).then(data => console.log(data)).catch(err => console.log(err.code));
        },
    },
}
</script>

<style scoped>

</style>
