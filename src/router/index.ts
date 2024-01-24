import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import MovieDetailView from "@/views/MovieDetailView.vue";
import WatchlistView from "@/views/WatchlistView.vue";
import InfoPageView from "@/views/InfoPageView.vue";
import FavoriteMoviesView from "@/views/FavoriteMoviesView.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: MovieDetailView
  },
  {
    path: '/unseenMovies',
    name: 'watchlist',
    component: WatchlistView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoPageView
  },
  {
    path: '/favoriteMovies',
    name: 'favorites',
    component: FavoriteMoviesView
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
