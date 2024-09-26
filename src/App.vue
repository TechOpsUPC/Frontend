<template>
  <div class="app">
    <sidebar />
    <div class="main-content">
      <forum-header />
      <div class="posts">
        <movie-card
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        />
        <pagination />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './forum/components/Sidebar.vue';
import ForumHeader from './forum/components/ForumHeader.vue';
import MovieCard from './forum/components/MovieCard.vue';
import Pagination from './forum/components/Pagination.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    ForumHeader,
    MovieCard,
    Pagination
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: "The Shawshank Redemption",
          description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          imageUrl: "https://th.bing.com/th?id=OSK.302aa7d75b6ddfcab88b57aa43976470&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=1.1&pid=SANGAM",
          username: "user1"
        },
        {
          id: 2,
          name: "The Godfather",
          description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          imageUrl: "https://th.bing.com/th?id=OSK.6f9a4bc2f18a70772856c93ddc7f03d8&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=1.1&pid=SANGAM",
          username: "user2"
        },
        {
          id: 3,
          name: "The Godfather",
          description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          imageUrl: "https://th.bing.com/th?id=OSK.6f9a4bc2f18a70772856c93ddc7f03d8&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=1.1&pid=SANGAM",
          username: "user3"
        }
      ]
    };
  }
}
</script>


<style>
.app {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido en el eje horizontal */
  padding-left: 20px; /* Espacio adicional desde el sidebar */
  padding-right: 20px; /* Espacio adicional para evitar que el contenido toque los bordes de la ventana */
}

.posts {
  width: 100%; /* Aprovecha el ancho completo del contenedor */
  display: flex;
  flex-direction: column;
  align-items: center; /* Alinea los posts al centro */
  overflow-y: auto; /* Permite scroll vertical si hay muchos posts */
}
</style>