<template>
  <section id="latest_movies" class="pt-4 pb-5 center_home">
    <div class="container">
      <HeadingComponent> Latest<span class="col_red"> Movies</span></HeadingComponent>


      <div class="row">
        <DisplayCard
          v-for="movie in latestMovies"
          :key="movie.id"
          :description="movie.description"
          :genre="movie.genre"
          :imageSrc="movie.imageSrc"
          :imdbRating="movie.imdbRating"
          :movieId="movie.id"
          :movieTitle="movie.title"
          :releaseYear="movie.releaseYear"
          :runtime="movie.runtime"
        >
          <template v-slot:description>
            <p class="mb-2">{{ movie.description }}</p>
          </template>

          <template v-slot:leftButton>
            <router-link :to="{ name: 'detail', params: { id: movie.id } }" class="button">
              More Info
            </router-link>
          </template>
        </DisplayCard>
      </div>
    </div>
  </section>

  <section id="top_movies" class="pt-4 pb-5 center_home">
    <div class="container">
      <HeadingComponent> Top<span class="col_red"> Movies</span></HeadingComponent>

      <div class="row">
        <DisplayCard
          v-for="movie in topMovies"
          :key="movie.id"
          :description="movie.description"
          :genre="movie.genre"
          :imageSrc="movie.imageSrc"
          :imdbRating="movie.imdbRating"
          :movieId="movie.id"
          :movieTitle="movie.title"
          :releaseYear="movie.releaseYear"
          :runtime="movie.runtime"
        >
          <template v-slot:description>
            <p class="mb-2">{{ movie.description }}</p>
          </template>

          <template v-slot:leftButton>
            <router-link :to="{ name: 'detail', params: { id: movie.id } }" class="button">
              More Info
            </router-link>
          </template>
        </DisplayCard>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import DisplayCard from '@/components/DisplayCard.vue'
import HeadingComponent from "@/components/HeadingComponent.vue";

export default {
  components: {
    HeadingComponent,
    DisplayCard
  },
  data() {
    return {
      movies: [],
      latestMovies: [],
      topMovies: []
    }
  },

  mounted() {
    this.fetchMoviesData()
  },

  methods: {
    fetchMoviesData() {
      // Fetch movies data
      axios
          .get('/moviesInfo.json')
          .then((response) => {
            this.movies = response.data.movies
            this.filterLatestMovies() // Call the filtering function after data is fetched
            this.filterTopMovies()
          })
          .catch((error) => {
            console.error('Error fetching movies data:', error)
          })
    },

    filterLatestMovies() {
      // Filter movies
      this.latestMovies = this.movies.filter((movie) => movie.latestMovie === true)
    },

    filterTopMovies() {
      // Filter movies
      this.topMovies = this.movies.filter((movie) => movie.topMovie === true)
    }
  }
}
</script>

<style scoped></style>