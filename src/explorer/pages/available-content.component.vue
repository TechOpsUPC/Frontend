<script>
import movieService from '../../shared/services/movieService.js';
import EventList from "../../events/components/event-list.component.vue";

export default {
  components: {EventList},
  data() {
    return {
      movies: [],
      currentPage: 1,
      perPage: 3,
      filterOptions: [3, 5, 10],
    };
  },
  computed: {
    filteredMovies() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.movies.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.movies.length / this.perPage);
    },
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      movieService.getMovies().then(response => {
        this.movies = response.data;
      });
    },
    markAsWatched(id) {
      console.log(`Movie ${id} marked as watched`);
    },
    addToList(id) {
      console.log(`Movie ${id} added to list`);
    },
    changePage(page) {
      this.currentPage = page;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<template>
  <h1>Contenido disponible</h1>

  <div>
    <div class="filter-bar">
      <label for="filter">Filtrar por:</label>
      <select id="filter" v-model="perPage">
        <option v-for="option in filterOptions" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>

    <h2 class="results-subtitle">Resultados:</h2>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">← Previous</button>
      <span v-for="page in totalPages" :key="page">
        <button @click="changePage(page)" :class="{ active: page === currentPage }">{{ page }}</button>
      </span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next →</button>
    </div>
    <div class="scroll-panel">
      <div class="content">
        <div v-for="movie in filteredMovies" :key="movie.id" class="card">
          <img :src="movie.image" alt="movie.title" />
          <div class="movie-details">
            <div class="title-row">
              <h2>{{ movie.title }}</h2>
              <span class="by">by: {{ movie.creator }}</span>
            </div>
            <p>{{ movie.description }}</p>
          </div>
          <button class="btn-left" @click="markAsWatched(movie.id)">Marcar como visto</button>
          <button class="btn-right" @click="addToList(movie.id)">Añadir a lista</button>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>
.filter-bar {
  background-color: #8c2c34;
  padding: 10px;
  margin-bottom: 40px;
  color: black;
  width: fit-content;
  border-radius: 5px;
}

.results-subtitle {
  color: grey;
  margin-bottom: 10px;
}

.scroll-panel {

  width: 100%;
  max-height: 80vh; /* Limita la altura al 80% de la ventana */
  overflow-y: auto; /* Activa el scroll vertical */
  padding: 20px; /* Reduce el padding para mejor adaptación */
  box-sizing: border-box; /* Incluye el padding en las dimensiones */
  border-radius: 5px;
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

.card {
  display: flex;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
  position: relative;
  align-items: flex-start;
  border-radius: 5px;
  background-color: #fff;
}

.movie-details {
  flex-grow: 1;
  margin-left: 20px;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.by {
  font-size: 14px;
  color: grey;
}

img {
  width: 150px;
  height: auto;
}

.btn-left {
  background-color: #8c2c34;
  border: none;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 190px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.btn-right {
  background-color: #8c2c34;
  border: none;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination button {
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
}

.pagination button.active {
  background-color: #8c2c34;
  color: white;
}

.pagination button:disabled {
  cursor: not-allowed;
}
</style>
