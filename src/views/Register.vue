<template>
  <div class="register">
    <div id="registerForm">
      <h1>Création de compte</h1>
        <form>
            <div class="mb-3">
                <label class="form-label" for="inputFirstname">Prénom</label>
                <input type="text" class="form-control" id="inputFirstname" v-model="user.firstname" >
            </div>
            <div class="mb-3">
                <label class="form-label" for="inputLastname">Nom</label>
                <input type="text" class="form-control" id="inputEmail" v-model="user.lastname">
            </div>
            <div class="mb-3">
                <label class="form-label" for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" v-model="user.email">
            </div>
            <div class="mb-3">
                <label class="form-label" for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" v-model="user.password">
            </div>
            <button class="btn btn-primary" v-on:click.prevent="saveUser()">Envoyer</button>
        </form>
      </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService.js";

export default {
  name: "Register",
  data: function() {
    return {
      // user data
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },

      // v-show
      idUser: null,
    }
  },
  methods: {
    saveUser() {
      this.postOrUpdateUser();
    },
    async postOrUpdateUser() {
        UserService.createUser(this.user).then((data) => {
          console.log(data)
          this.user.id = data.id;
          this.idUser = data.id;
        });
    },
  },
}
</script>

<style>

.register{
  display: flex;
  justify-content: center;
}

#registerForm {
  width:20%;
  background-color: skyblue;
  padding: 5px;
  border-radius: 5px;
}

</style>