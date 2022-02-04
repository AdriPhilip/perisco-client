<template>
  <div id="app">
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Accueil</router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <!-- v-if logged -->
            <div v-if="this.isLogged === true" class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/enfant">Enfant(s)</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/logout">Déconnexion</router-link>
                </li>
              </ul>
            </div>
            <!-- v-else not logged -->
            <div v-else class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/register">Inscription</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/login">Connexion</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      isLogged: Boolean,

      user: {
        id: "",
        email: "",
        firstname: "",
        lastname: "",
      },
    }
  },
  created() {
    this.is_logged()
  },
  methods: {
    is_logged() {
      if (sessionStorage.getItem('loggedin') == "true") {
        this.user.id = sessionStorage.getItem('account_id')
        this.user.email = sessionStorage.getItem('email')
        this.user.firstname = sessionStorage.getItem('firstname')
        this.user.lastname = sessionStorage.getItem('lastname')
        this.isLogged = true
      } else {
        this.isLogged = false
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
