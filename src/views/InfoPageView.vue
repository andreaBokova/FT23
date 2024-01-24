<template>
  <section>
    <header>
      <h1>Welcome to <span class="col_red">A-Movies!</span></h1>
    </header>
    <HeadingComponent> A-Movies Features: </HeadingComponent>

    <ul>
      <li><strong>Latest Movies:</strong> Explore our curated selection of the latest releases.</li>
      <li><strong>Top Movies:</strong> Dive into a collection of top-rated movies.</li>
      <li>
        <strong>More Info Page:</strong> Access detailed information and trailers for each movie.
      </li>
      <li>
        <strong>Watchlist:</strong> Save movies for later, manage your list, mark as unseen, add to
        favorites, or remove them. You can also add your own notes (ratings) to watched movies.
      </li>
    </ul>

    <HeadingComponent> How to Use:</HeadingComponent>
    <ol>
      <li>
        <strong>Explore Movies:</strong>
        <ul>
          <li>Browse the A-Movies catalog to discover a variety of films.</li>
          <li>Click on a movie to access more details.</li>
        </ul>
      </li>

      <li>
        <strong>More Info:</strong>
        <ul>
          <li>In the movie details page, find additional information and watch the trailer.</li>
          <li>Save the movie to your unseenMovies for future viewing.</li>
        </ul>
      </li>

      <li>
        <strong>Watchlist Management:</strong>
        <ul>
          <li>Visit the unseenMovies page to see all your saved movies.</li>
          <li>
            Mark movies as "Unseen," add them to your favorites, or remove them from the
            unseenMovies. You can also add your own notes (ratings) to watched movies.
          </li>
        </ul>
      </li>
    </ol>

    <p>Enjoy your cinematic journey.</p>
  </section>
</template>

<script>
import HeadingComponent from "@/components/HeadingComponent.vue";

export default {
  components: {HeadingComponent}
}
</script>
<style scoped>
header {
  color: rgb(255, 255, 255);
  padding: 10px;
  text-align: center;
}

section {
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgba(28, 24, 24, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

p {
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>