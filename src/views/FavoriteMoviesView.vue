<template>
  <div>
    <NavInfoComponent :title="pageTitle" />
    <section class="pt-4 pb-5 center_home">
      <div class="container">
        <HeadingComponent> Your<span class="col_red"> Pick</span></HeadingComponent>

        <div class="row">
          <DisplayCard
            v-for="movie in favoriteMovies"
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
            <template v-slot:notes>
              <i class="fa-solid fa-user col_red"></i><strong> My Rating:</strong>
              {{ getNoteForMovie(movie.id) }}

              <br /><br />
            </template>

            <template v-slot:rightButton>
              <button class="button" @click="removeFromFavorites(movie.id)">Remove</button>
            </template>
          </DisplayCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { useMovieStore } from '@/stores/movieStore'
import NavInfoComponent from '@/components/NavInfoComponent.vue'
import DisplayCard from '@/components/DisplayCard.vue'
import HeadingComponent from '@/components/HeadingComponent.vue'

export default {
  components: { HeadingComponent, DisplayCard, NavInfoComponent },
  data() {
    return {
      seenMovies: [],
      favoriteMovies: [],
      unseenMovies: [],
      pageTitle: 'Favorite Movies',
      movieNote: ''
    }
  },

  methods: {


    updateMovies() {
      this.unseenMovies = this.movieStore.getUnseenMovies()
      this.seenMovies = this.movieStore.getSeenMovies()
      this.favoriteMovies = this.movieStore.getFavoriteMovies()
    },

    removeFromFavorites(movieId) {

      this.movieStore.removeFromFavorites(movieId)
    },

    getNoteForMovie(movieId) {
      return this.movieStore.getNoteForMovie(movieId)
    }
  },
  mounted() {
    this.movieStore = useMovieStore()
    this.updateMovies()
  }



}
</script>

<style scoped></style>