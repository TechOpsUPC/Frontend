﻿<script>

import { ref } from 'vue';
import EventList from "../components/event-list.component.vue";
import {EventApiService} from "../services/event-api.service.js";
import {EventEntity} from "../model/event/event.entity.js";



export default {
  name: "Events-page",
  components: {EventList},
  data: function () {
    return {

      events: [],
      errors: [],
      eventApiService: new EventApiService(),
      searchQuery: "", // Campo de búsqueda
     /* items: [
        {id: 1, name: 'Goku'},
        {id: 2, name: 'Vegeta'},
        {id: 3, name: 'Gohan'}
        // Agrega más elementos según tus datos
      ],*/
      filteredItems: [],
    }
  },
  methods: {
    filterItems() {
      this.filteredItems = this.items.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    buildEventListFromResponsiveData(events){
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
  created() {
    // Inicializar la lista filtrada con todos los items
    this.filteredItems = this.items;

    this.eventApiService.getEvent()
        .then(response =>{
          let dataEvents = response.data;
          console.log(dataEvents);
          console.log(response.data.results);
          this.events = this.buildEventListFromResponsiveData(dataEvents);
          console.log(this.events);
        })
        .catch(e =>{
          this.errors.push(e);
        });
  }

};

</script>

<template>
  <div>
    <h1>Eventos</h1>
    <p>Para ti</p>
  </div>

  <div>
    <!-- Barra de búsqueda
     <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        @input="filterItems"
    />
    -->



    <div >
      <pv-icon-field style="margin-left: 84%; ">
        <pv-input-icon class="pi pi-search" />
        <pv-input-text  placeholder="Search" />
      </pv-icon-field>
    </div>

        <!-- Lista de resultados filtrados
         <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
        -->
    <div class="scroll-panel">
      <div class="content">

        <div id="list">
          <event-list :event-list="events"></event-list>
        </div>
      </div>
    </div>

    <div class="scroll-panel">
      <div class="content">

        <div id="list">
          <event-list :event-list="events"></event-list>
        </div>
      </div>
    </div>





  </div>
</template>

<style scoped>
#list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
::-webkit-scrollbar-thumb {

  background-color: #00FF01;
  color: #00FF01;
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}

.scroll-panel {
  width: fit-content;
  height: 778px;
  overflow-y: auto; /* Activa el scroll vertical */
  border: 1px solid #ccc;
  padding: 10px;
}

/* Estilos del Scrollbar */
.scroll-panel::-webkit-scrollbar {
  width: 12px; /* Ancho del scrollbar */
}

.scroll-panel::-webkit-scrollbar-thumb {
  background: #7e7c7c;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.scroll-panel::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 2px solid #dadada;
}

.scroll-panel::-webkit-scrollbar-thumb:hover {
  background-color: black; /* Color del thumb cuando está en hover */
}

.content {
  height: 1000px; /* Asegura que el contenido sea lo suficientemente grande para que aparezca el scroll */
}

</style>