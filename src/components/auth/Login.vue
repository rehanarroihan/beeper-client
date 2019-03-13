<template>
    <div>
        <h3 class="text-center">Login</h3>

        <div class="form-group">
            <input type="text" class="form-control" v-model="user.username" placeholder="Username">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="user.password" placeholder="Password">
        </div>
        <hr>
        <button class="btn btn-lg btn-primary btn-block" @click="login()">Login</button>

        <p class="text-center m-t-20">
            Dont have account ? <router-link to="/auth/register">Register</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data: function() {
        return {
            user: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            axios.post(`http://${process.env.VUE_APP_API_BASE_URL}/auth`, this.user).then(function(data) {
                alertify.success("Login successful!");
            }).catch(function(err) {
                if(err.response.status == 422) {
                    err.response.data.errors.forEach(function(e) {
                        alertify.error(e);
                    });
                }
            }); 
        }
    }
}
</script>

<style scoped>

</style>
