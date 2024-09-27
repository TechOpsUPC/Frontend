<script>

import { ref } from 'vue';
import EventList from "../components/event-list.component.vue";



export default {
  name: "Events-page",
  components: { EventList},
  data() {
    return {
      searchQuery: "", // Campo de búsqueda
      items: [
        { id: 1, name: 'Goku' },
        { id: 2, name: 'Vegeta' },
        { id: 3, name: 'Gohan' }
        // Agrega más elementos según tus datos
      ],
      filteredItems: [],
      events: [
        {
          eventId: "65",
          contentId: "45",
          title: "Event for Call me movie",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper nisl augue, vitae tincidunt sapien venenatis ut. Aenean dapibus sit.",
          date: "2024-05-05",
          address: "av.primavera 123",
          creatorId: "2"
        },
        {
          eventId: "456",
          contentId: "98",
          title: "Event for Impossile movie",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper nisl augue, vitae tincidunt sapien venenatis ut. Aenean dapibus sit.",
          date: "2024-02-01",
          address: "av.primavera 321",
          creatorId: "654"
        }
      ]

    };
  },
  methods: {
    filterItems() {
      this.filteredItems = this.items.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    // Inicializar la lista filtrada con todos los items
    this.filteredItems = this.items;
  }

};

</script>

<template>
  <div>
    <h1>Eventos</h1>
    <p>Para ti</p>
  </div>

  <div>
    <!-- Barra de búsqueda -->
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        @input="filterItems"
    />
    <div >
      <pv-icon-field style="margin-left: 84%; ">
        <pv-input-icon class="pi pi-search" />
        <pv-input-text  placeholder="Search" />
      </pv-icon-field>
    </div>

        <!-- Lista de resultados filtrados -->
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>

    <div id="list">
       <event-list :event-list="events"></event-list>/
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
</style>