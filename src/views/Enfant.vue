<template>
  <div class="child">
    <p>{{this.child.firstname}} {{this.child.lastname}}</p>
        <div id="calendar">
            <FunctionalCalendar
                v-model="calendarData"
                
                v-on:changedMonth="changedMonth"
                v-on:changedYear="changedYear"
                
                :sundayStart="true"
                :date-format="'dd/mm/yyyy'"
                :is-date-range="true"
                :is-date-picker="true"
            ></FunctionalCalendar>
        </div>
  </div>
</template>
    
<script>
import { FunctionalCalendar } from 'vue-functional-calendar';
import ChildService from "@/services/ChildService.js";

export default {
    components: {
        FunctionalCalendar
    },
    name: "Enfant",
    data: function() {
        return {
            // L'enfant
            child: {
                user_id: sessionStorage.getItem("user_id"),
                firstname: "",
                lastname: ""
            },
            calendarData: {},
            calendarConfigs: {
                sundayStart: false,
                dateFormat: 'dd/mm/yyyy',
                isDatePicker: false,
                isDateRange: false
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
  flex-direction: column;
  align-items: center;
}

#calendar{
    width: 500px;
}
</style>