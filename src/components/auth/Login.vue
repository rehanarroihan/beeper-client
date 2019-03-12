<template>
    <div>
        <h3 class="text-center">Login</h3>

        <input type="text" class="form-control" placeholder="Username">
        <input type="password" class="form-control" placeholder="Password">

        <hr>

        <button class="btn btn-lg btn-primary btn-block">Register</button>

        <p class="text-center">
            Dont have account ? <router-link to="/auth/register">Register</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Login'    
}
</script>

<style scoped>

</style>
