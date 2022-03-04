<template>
  <div class="child">
    <div id="childrenList" class="list-group">
      <ul class="list-group">          
          <li class="list-group-item" v-for="child in this.children" :key="child.id">
              <router-link
                :to="{
                  name: 'Enfant',
                  params: {
                    idChild: child.child_id,
                  },
                }">
                <p>{{child.firstname}} {{child.lastname}}</p>
              </router-link>
              <button class="btn btn-danger" v-on:click.prevent="deleteChild(child.child_id)">
                supprimer
              </button>
          </li>
      </ul> 
    </div>
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
  name: "Enfants",
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
          this.children = data
        }
      );
    },
    // sauvegarder un enfant
    saveChild() {
      this.postChild();
    },
    async postChild() {
      // Rechargement de la page
      window.location.href =
        window.rootUrl + `/enfants`;

      ChildService.createChild(this.child).then((data) => {
        this.child.child_id = data.child_id;
        this.idChild = data.child_id;
      });
    },
    async deleteChild(child_id) {
      // Rechargement de la page
      window.location.href =
        window.rootUrl + `/enfants`;

      ChildService.deleteChild(child_id);
    },
  }
}
</script>

<style>
a:link {
  text-decoration: none;
}

.child{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

#childForm, #childrenList {
  width:20%;
  background-color: skyblue;
  padding: 5px;
  border-radius: 5px;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
}

</style>
