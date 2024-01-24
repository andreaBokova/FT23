<template>
  <div>
    <NavInfoComponent :title="pageTitle" />
    <!-- Unseen Movies Section -->
    <section class="pt-4 pb-5 center_home">
      <div class="container" style="background: rgba(166, 13, 45, 0.16); padding: 20px">
        <HeadingComponent> Unseen<span class="col_red"> Movies</span></HeadingComponent>

        <div class="row">
          <DisplayCard
            v-for="movie in unseenMovies"
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
            <!-- Content for slots -->

            <template v-slot:leftButton>
              <button class="button" @click="markAsSeen(movie.id)">Mark as Seen</button>
            </template>
            <template v-slot:rightButton>
              <button class="button" @click="removeFromWatchlist(movie.id)">Remove</button>
            </template>
          </DisplayCard>
        </div>
      </div>
    </section>

    <!-- Seen Movies Section -->
    <section class="pt-4 pb-5 center_home">
      <div class="container" style=" padding: 20px">
        <HeadingComponent> Seen<span class="col_red"> Movies</span></HeadingComponent>

        <div class="row">
          <DisplayCard
            v-for="movie in seenMovies"
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
            <template v-slot:leftButton>
              <button class="button" @click="markAsUnseen(movie.id)">Mark as Unseen</button>
            </template>

            <template v-slot:rightButton>
              <button class="button" @click="addToFavorites(movie)">Add to Favorites</button>
            </template>

            <template v-slot:addNoteButton>
              <br />
              <br />

              <textarea
                v-model="movieNotes[movie.id]"
                placeholder="Add a note"
                style="background: rgba(28, 24, 24, 0.23); color: white"
              ></textarea>
              <br />
              <button class="button" @click="addNoteToMovie(movie.id)">Add a note</button>
            </template>

            <template v-slot:notes>
              <i class="fa-solid fa-user col_red"></i><strong> My Rating:</strong>
              {{ getNoteForMovie(movie.id) }}

              <br /><br />
            </template>
          </DisplayCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="ts">
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
      pageTitle: 'Watchlist',
      movieNotes: {}
    }
  },
  methods: {
    updateMovies() {
      this.unseenMovies = this.movieStore.getUnseenMovies()
      this.seenMovies = this.movieStore.getSeenMovies()
      this.favoriteMovies = this.movieStore.getFavoriteMovies()
    },
    markAsUnseen(movieId) {
      this.movieStore.markAsUnseen(movieId)
      this.updateMovies()
    },
    markAsSeen(movieId) {
      this.movieStore.markAsSeen(movieId)
      this.updateMovies()
    },
    removeFromWatchlist(movieId) {
      this.movieStore.removeFromWatchlist(movieId)
      this.updateMovies()
    },
    addToFavorites(movie) {
      this.movieStore.addToFavorites(movie)
    },
    addNoteToMovie(movieId) {
      // Use the corresponding movieNote for the given movieId
      const note = this.movieNotes[movieId] || ''
      this.movieStore.addNoteToMovie({ movieId, note })
      this.movieNotes[movieId] = '' // Clear the input field after adding the note
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