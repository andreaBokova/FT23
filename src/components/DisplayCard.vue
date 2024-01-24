<template>
  <div class="col-md-3 col-6 movie-card">
    <div class="clearfix position-relative">
      <div class="trend_2im1 clearfix">
        <div class="grid">
          <figure class="mb-0">
            <img :src="imageSrc" alt="Movie Image" class="w-100" />
          </figure>
        </div>
      </div>
    </div>

    <div class="bg_grey p-3 clearfix card-text">
      <h5 class="col_red">
        {{ movieTitle }}
      </h5>

      <h6>
        Imdb {{ imdbRating }}
        <span class="ms-2"><i class="fa fa-star col_red me-1"></i></span>
        Year: {{ releaseYear }}
        <span class="ms-2"
          >Runtime: {{ runtime }}
          <router-link
            :to="{ name: 'detail', params: { id: movieId } }"
            class="button"
            style="background: transparent"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </router-link>
        </span>
      </h6>

      <div class="description-slot">
        <slot name="description"></slot>
      </div>

      <div class="notes-slot">
        <slot name="notes"></slot>
      </div>
      <!-- Slots for buttons -->
      <div style="text-align: center">
        <div class="slots">
          <slot name="leftButton"></slot>
          <slot name="rightButton"></slot>
          <slot name="addNoteButton"></slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    movieId: Number,
    imageSrc: String,
    movieTitle: String,
    genre: String,
    imdbRating: Number,
    releaseYear: Number,
    runtime: String,
    description: String,
    director: String,
    country: String,
    stars: String,
    trailer: String
  }
}
</script>

<style scoped>
figure {
  height: 340px;
}

.button {
  margin: 3px;
}
</style>
