<template>
    <div>
        <h3 class="text-center">Register</h3>

        <div class="form-group">
            <input type="email" class="form-control" placeholder="Email address">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password">
        </div>

        <hr>

        <button class="btn btn-lg btn-primary btn-block">Register</button>

        <p class="text-center m-t-20">
            Already have an account? <router-link to="/auth/login">Login</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Register'    
}
</script>

<style scoped>

</style>
