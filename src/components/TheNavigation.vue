<!-- TheNavigation.vue -->
<template>
  <section id="top">
    <div class="container">
      <div class="row top_1">
        <div class="col-md-3">
          <div class="top_1l pt-1">
            <h3 class="mb-0"><i class="fa fa-video-camera col_red me-1"></i> A-Movies</h3>
          </div>
        </div>
        <div class="col-md-5">
          <div class="top_1m"></div>
        </div>
      </div>
    </div>
  </section>
  <section id="header">
    <nav id="navbar_sticky" class="navbar navbar-expand-md navbar-light">
      <div class="container">
        <router-link class="navbar-brand text-white fw-bold" to="/">
          <i class="fa fa-video-camera col_red me-1"></i> A-Movies
        </router-link>
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mb-0">
            <li class="nav-item">
              <router-link class="nav-link" exact to="/"> Home </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/unseenMovies"> Watchlist </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/favoriteMovies"> Favorite Movies </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/info"> Info </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script lang="ts">
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const navbarSticky = document.getElementById('navbar_sticky')
      const sticky = navbarSticky.offsetTop
      const navbarHeight = document.querySelector('.navbar').offsetHeight

      if (window.pageYOffset >= sticky + navbarHeight) {
        navbarSticky.classList.add('sticky')
        document.body.style.paddingTop = navbarHeight + 'px'
      } else {
        navbarSticky.classList.remove('sticky')
        document.body.style.paddingTop = '0'
      }
    }
  }
}
</script>

<style scoped></style>