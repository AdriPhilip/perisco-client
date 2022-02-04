<template>
  <div class="logout">
    <p>Aurevoir !</p>
  </div>
</template>

<script>
// import jwt from 'jsonwebtoken'

export default {
  name: "Logout",
  data: function(){
    return {
    }
  },
  created() {
    this.logout()
  },
  methods: {
    logout() {
      if (sessionStorage.getItem('loggedin')) {
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('firstname')
        sessionStorage.removeItem('lastname')
        sessionStorage.removeItem('loggedin')
        this.$router.push('/')
        window.location.reload()
      } else {
        this.$router.push('/')
        window.location.reload()
      }
    }
  },
}
</script>
