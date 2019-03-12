<template>
    <div>
        <h3 class="text-center">Login</h3>

        <div class="form-group">
            <input type="text" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password">
        </div>

        <hr>

        <button class="btn btn-lg btn-primary btn-block">Register</button>

        <p class="text-center m-t-20">
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
