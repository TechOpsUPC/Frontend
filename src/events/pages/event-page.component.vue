<script>


import {EventApiService} from "../services/event-api.service.js";
import EventInfo from "../components/event-info.component.vue";
import {EventEntity} from "../model/event/event.entity.js";

export default {
  name: "EventPage",
  components: {EventInfo},
  data() {
    return {
      event:[],
      eventApiService: new EventApiService(),
    }
  },
  methods: {
    buildEventFromResponsiveData(events){
      return events.map(event =>
          new EventEntity(
              event.eventId,
              event.contentId,
              event.title,
              event.description,
              event.date,
              event.address,
              event.creatorId,
          )
      )
    }
  },
  created(){
    this.eventApiService.getEventbyId(this.$route.params.id)
        .then((response)=>{
          let Dataevent = response.data;
          this.event=this.buildEventFromResponsiveData(Dataevent);
          console.log(response.data)
          console.log(Dataevent)
          console.log(this.event)

        })
  }
}
</script>

<template>
  <router-link to="/events">
    <pv-button icon="pi pi-arrow-left" style="background-color: transparent; color: black; border-color: transparent; "></pv-button>
  </router-link>
  <div class="movie-details">

     <event-info :event-info="this.event">
     </event-info>
    <pv-button label="Asistir" class="p-button-rounded p-button-secondary" />
  </div>

</template>

<style scoped>
.details-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.movie-details {
  text-align: left;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  display: flex;


}

.movie-details img {
  max-width: 100%;
}
</style>