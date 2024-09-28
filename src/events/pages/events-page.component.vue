<script>

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
      items: [
        {id: 1, name: 'Goku'},
        {id: 2, name: 'Vegeta'},
        {id: 3, name: 'Gohan'}
        // Agrega más elementos según tus datos
      ],
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




    <pv-scroll-panel
        style="width: 100%; height: 600px; solid-color: black"
        :dt="{
        bar: {
            background: '{primary.color}'
        }
    }"
    >
      <div id="list">
        <event-list :event-list="events"></event-list>
      </div>
    </pv-scroll-panel>




  </div>
</template>

<style scoped>
#list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>