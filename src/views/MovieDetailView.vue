<template>
  <div>
    <NavInfoComponent :title="pageTitle" />
  </div>

  <section id="play">
    <div class="play_m clearfix">
      <div class="container">
        <div class="row trend_1">
          <div class="col-md-12">
            <div class="trend_1l"></div>
          </div>
        </div>

        <div class="play2 row mt-4">
          <div class="col-md-4 p-0">
            <div class="play2l">
              <div class="grid clearfix">
                <figure class="effect-jazz mb-0">
                  <img :src="selectedMovieInfo.imageSrc" alt="abc" class="w-100" height="515" />
                </figure>
              </div>
            </div>
          </div>
          <div class="col-md-8 p-0">
            <div class="play2r bg_grey p-4">
              <h4 class="col_red">
                {{ selectedMovieInfo.title }}
              </h4>
              <h6>
                Imdb {{ selectedMovieInfo.imdbRating
                }}<span class="ms-2"><i class="fa fa-star col_red me-1"></i></span> Year :
                {{ selectedMovieInfo.releaseYear }}
                <span class="ms-2">Runtime: {{ selectedMovieInfo.runtime }}</span>
              </h6>

              <hr class="line" />
              <p class="mt-3">{{ selectedMovieInfo.description }}</p>
              <div class="play2ri row mt-4">
                <div class="col-md-6">
                  <div class="play2ril">
                    <h6 class="fw-normal">
                      Genre: <span class="pull-right">{{ selectedMovieInfo.genre }}</span>
                    </h6>
                    <hr class="hr_1" />
                    <h6 class="fw-normal">
                      Director: <span class="pull-right">{{ selectedMovieInfo.director }}</span>
                    </h6>
                    <hr class="hr_1" />
                    <h6 class="fw-normal">
                      Stars: <span class="pull-right">{{ selectedMovieInfo.stars }}</span>
                    </h6>
                    <hr class="hr_1" />
                    <h6 class="fw-normal">
                      Country: <span class="pull-right">{{ selectedMovieInfo.country }}</span>
                    </h6>
                    <hr class="hr_1 mb-0" />
                  </div>
                </div>
                <div class="col-md-6">
                  <iframe
                    :src="selectedMovieInfo.trailer"
                    allowfullscreen
                    height="250"
                    width="400"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="text-align: center">
        <span
          ><a class="button" @click="addToUnseenMovies(this.selectedMovieInfo)"
            >Add to Watchlist</a
          ></span
        >
      </div>
    </div>

    <br /><br />
  </section>
</template>

<script type="ts">
import { useMovieStore } from '@/stores/movieStore'
import axios from 'axios'
import NavInfoComponent from '@/components/NavInfoComponent.vue'
import DisplayCard from "@/components/DisplayCard.vue";

export default {
  components: {
    NavInfoComponent,
    DisplayCard,
  },

  mounted() {
    console.log('MovieDetailView mounted')

    this.movieId = this.$route.params.id

    console.log('movieId in mounted:', this.movieId)

    // Fetch movie data from the JSON file
    axios
        .get('/moviesInfo.json')
        .then((response) => {
          this.movies = response.data.movies
          console.log('movies in axios response:', this.movies)

          this.getMovieInfo() // Call the filtering function after data is fetched
        })
        .catch((error) => {
          console.error('Error fetching movies data:', error)
        })
  },
  data() {
    return {
      movies: [],
      movieId: null,
      selectedMovieInfo: [],
      pageTitle: 'More info'
    }
  },

  methods: {
    getMovieInfo() {
      // Convert this.movieId to a number if needed
      const mId = parseInt(this.movieId, 10)
      // Find the movie where id matches the current movieId
      this.selectedMovieInfo = this.movies.find((movie) => movie.id === mId) || []
    },
    addToUnseenMovies(movie) {
      const movieStore = useMovieStore()
      movieStore.addToUnseenMovies(movie)
    }
  }
}
</script>

<style scoped></style>