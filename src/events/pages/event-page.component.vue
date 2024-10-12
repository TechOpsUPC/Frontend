<script>


import {EventApiService} from "../services/event-api.service.js";

export default {
  name: "EventPage",
  components: {},
  data() {
    return {
      event:{},
      eventApiService: new EventApiService(),
    }
  },
  methods: {

  },
  created(){
    this.eventApiService.getEventbyId(this.$route.params.id)
        .then((response)=>{
          this.event=response.data;
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
    <pv-card style="width: 30rem;">
      <template #header>
        <img alt="Movie Poster" src="https://img.freepik.com/vector-gratis/cartel-realista-cine-cubo-iluminado-bebida-palomitas-maiz-entradas-carrete-gafas-3d-sobre-fondo-azul-ilustracion-vector-cintas_1284-77070.jpg" />
      </template>

      <template #title>
        Festival de Películas
      </template>

      <template #subtitle>
        Transmitiendo: "Movie Title"
      </template>

      <template #content>
        <p>
          Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look.
        </p>
        <p>Lugar: Av Primavera 123</p>
        <p>Fecha: 12-10-24</p>
        <p>Hora: 18:00 PM</p>
        <p>Promocionado por: creatorName</p>
      </template>

      <template #footer>
        <pv-button label="Asistir" class="p-button-rounded p-button-secondary" />
      </template>
    </pv-card>
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