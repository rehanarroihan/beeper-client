var AuthPlugin = {
    setToken: function(token, expiration) {
        localStorage.setItem('authToken', token);
        localStorage.setItem('authTokenExpiration', expiration);
    },
    destroyToken: function() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authTokenExpiration');
    },
    getToken: function() {
        const token = localStorage.getItem('authToken');
        const expiration = localStorage.getItem('authTokenExpiration');

        if (token == null || expiration == null) {
            return null;
        }
        if (Date.now() > parseInt(expiration)) {
            this.destroyToken();
            return null;
        } else {
            return token;
        }
    },
    loggedIn: function() {
        if (this.getToken()) {
            return true;
        } else {
            return false;
        }
    }
};

export default function(Vue) {
    Vue.auth = AuthPlugin;
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: function() {
                return Vue.auth;
            }
        }
    });
}