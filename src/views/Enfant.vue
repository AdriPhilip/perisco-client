<template>
  <div class="child">
    <p>{{this.child.firstname}} {{this.child.lastname}}</p>
  </div>
</template>
    
<script>
import ChildService from "@/services/ChildService.js";

export default {
    name: "Enfant",
    data: function() {
        return {
            // L'enfant
            child: {
                user_id: sessionStorage.getItem("user_id"),
                firstname: "",
                lastname: ""
            }
        };
    },
    created() {
        // Appelle la récupération des données du client uniquement sur la route Client
        this.getChild();
    },
    methods: {
        // Retourne le JSON du client
        getChild() {
        ChildService.getChildById(this.$route.params.idChild).then((data) => {
            this.child = data;
            this.idClient = data.child_id;
        });
        // this.getProjects();
        }
    }
}
</script>

<style>
.child{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
</style>