<template>
  <div class="home">
    <h1>PERISCO</h1>
    <p>Bonjour {{this.user.firstname}} {{this.user.lastname}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: function() {
    return {
      user: {
        email: "",
        firstname: "",
        lastname: "",
      },
    }
  },
  created() {
    if (sessionStorage.getItem('email')) {
      try {
        this.user.email = sessionStorage.getItem('email');
        this.user.firstname = sessionStorage.getItem('firstname');
        this.user.lastname = sessionStorage.getItem('lastname');
      } catch(e) {
        console.log(e)
      }
    }
  },
}
</script>
