<template>
  <div class="child">
    <ul id="childList">
      <li></li>
    </ul> 
    <div id="childForm">
      <h1>Ajouter un enfant</h1>
        <form>
            <div class="mb-3">
                <label class="form-label" for="inputChildFirstname">Prénom</label>
                <input type="text" class="form-control" id="inputFirstname" v-model="child.firstname" >
            </div>
            <div class="mb-3">
                <label class="form-label" for="inputLastname">Nom</label>
                <input type="text" class="form-control" id="inputLastname" v-model="child.lastname">
            </div>
            <button class="btn btn-primary" v-on:click.prevent="saveChild()">Ajouter</button>
        </form>
    </div>
  </div>
</template>


<script>
import ChildService from "@/services/ChildService.js";

export default {
  name: "Enfant",
  data: function(){
    return {
      children: [],
      child: {
        user_id: sessionStorage.getItem("user_id"),
        firstname: "",
        lastname: ""
      }
    }
  },
  created() {
    this.getChildren();
  },
  methods: {
    // Retourne le JSON des projets
    async getChildren() {
      ChildService.getChildrenByAccountId(this.child.user_id).then(
        (data) => {
          console.log(data)
        }
      );
    },
    // sauvegarder un enfant
    saveChild() {
      this.postOrUpdateChild();
    },
    async postOrUpdateChild() {
      ChildService.createChild(this.child).then((data) => {
        console.log(data)
        this.child.id = data.id;
        this.idChild = data.id;
      });
    },
  }
}
</script>

<style>

.child{
  display: flex;
  justify-content: center;
}

#childForm {
  width:20%;
  background-color: skyblue;
  padding: 5px;
  border-radius: 5px;
}

</style>
