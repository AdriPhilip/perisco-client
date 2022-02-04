<template>
  <div class="login">
    <div id="loginForm">
      <h1>Login</h1>
      <form ref="formLogin" @submit="login">
        <div class="mb-3">
            <label class="form-label" for="inputEmail">Email</label>
            <input type="email" :rules="[validations.required]" class="form-control" id="inputEmail" v-model="user.email">
        </div>
        <div class="mb-3">
            <label class="form-label" for="inputPassword">Password</label>
            <input type="password" :rules="[validations.required]" class="form-control" id="inputPassword" v-model="user.password">
        </div>
        <p class="subtitle error-msg">{{ user.errorMsg }}</p>
        <button class="btn btn-primary" v-on:click.prevent="login()">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService.js";
// import jwt from 'jsonwebtoken'

export default {
  name: "Login",
  data: function(){
    return {
      user: {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        errorMsg: ""
      },
      validations: {
        required: v => !!v || "This is a required field!"
      }
    }
  },
  methods: {
    login() {
      this.getSession();
    },
    async getSession() {
      UserService.getSession({
        "email": this.user.email,
        "password": this.user.password,
      }).then((data) => {
        if (data["loggedin"] == true){
          sessionStorage.setItem("user_id", data["id"]);
          sessionStorage.setItem("email", data["email"]);
          sessionStorage.setItem("firstname", data["firstname"]);
          sessionStorage.setItem("lastname", data["lastname"]);
          sessionStorage.setItem("loggedin", data["loggedin"]);
          this.$router.push('/')
          window.location.reload()
        }
        else {
          window.location.reload()
        }
      });
    },
    /*if (this.$refs.formLogin.validate()) {
      jwt.sign({
        email: this.email,
        password: this.password
      }, 'jwtSecret', (err, token) => {
        window.localStorage.setItem('token', token)
        this.$router.push('/')
      })
    }*/
  }
}
</script>

<style>

.login{
  display: flex;
  justify-content: center;
}

#loginForm {
  width:20%;
  background-color: skyblue;
  padding: 5px;
  border-radius: 5px;
}

</style>
