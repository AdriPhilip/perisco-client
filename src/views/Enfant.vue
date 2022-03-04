<template>
  <div class="child">
    <p>{{this.child.firstname}} {{this.child.lastname}}</p>
    <div id="calendar">
        <FunctionalCalendar
            v-model="calendarData"
                       
            :sundayStart="true"
            :showWeekNumbers="true"
            :date-format="'dd/mm/yyyy'"
            :dayNames="['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di']"
            :is-multiple-date-picker="true"
            :disabled-day-names="['Ve', 'Sa']"
        ></FunctionalCalendar>
    </div>
    <button class="btn btn-primary" v-on:click.prevent="saveOrder()">Enregistrer</button>
  </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar';
import ChildService from "@/services/ChildService.js";
import OrderService from "@/services/OrderService.js";
import moment from 'moment';

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
                lastname: "",
                idChild: "",
            },

            // les données du calendrier
            calendarData: {
                currentDate: new Date(),
                selectedDates: [],
                dateRange: {
                    end: "",
                    start: ""
                }
            },

            // les configurations du calendrier
            calendarConfigs: {
                sundayStart: false,
                dateFormat: 'dd/mm/yyyy',
                isDatePicker: false,
                isDateRange: false,
            },

            // les réservations
            orders: []
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
                this.idChild = data.child_id;
            })
            OrderService.getOrdersByChildId(this.$route.params.idChild).then((data) => {
                this.orders = data
                for (let i=0; i<data.length; i++){
                    let dateObject = {
                        date:moment(data[i]["date"]).format('D/M/YYYY').toString(),
                        dateTime:false,
                        hour:"00",
                        minute:"00"
                    }
                    this.calendarData.selectedDates.push(dateObject)
                }
            });
        },
        saveOrder(){
            this.postOrder()
        },
        async postOrder(){
            if(this.calendarData.selectedDates.length>=0){
                let orders = []
                for (let i = 0; i < this.calendarData.selectedDates.length; i++){
                    orders.push(this.calendarData.selectedDates[i]["date"])
                }
                let order = {};
                order["orders"] = orders;
                order["child_id"] = this.$route.params.idChild;
                OrderService.createOrder(order).then((data) => {
                    console.log(data)
                });
            }
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