// movieStore.ts
import { defineStore } from 'pinia'

const getLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key)) || []

const updateLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const useMovieStore = defineStore({
  id: 'movie',

  state: () => ({
    favoriteMovies: getLocalStorage('favoriteMovies'),
    unseenMovies: getLocalStorage('unseenMovies'),
    seenMovies: getLocalStorage('seenMovies'),
    notes: getLocalStorage('notes') || {}
  }),

  getters: {
    allMovies(state) {
      return [...state.favoriteMovies, ...state.unseenMovies, ...state.seenMovies]
    }
  },

  actions: {
    addToFavorites(movie) {
      if (!this.favoriteMovies.find((m) => m.id === movie.id)) {
        this.favoriteMovies.push(movie)
        this.updateLocalStorage('favoriteMovies')
        alert('Movie was added to favorites.')
      } else {
        alert('Movie is already in your favorites.')
      }
    },

    getSeenMovies() {
      return this.seenMovies
    },

    getFavoriteMovies() {
      return this.favoriteMovies
    },

    getUnseenMovies() {
      return this.unseenMovies
    },

    logAllMovies() {
      const allMovies = this.allMovies
      return allMovies
    },

    removeFromFavorites(movieId) {
      const index = this.favoriteMovies.findIndex((movie) => movie.id === movieId)
      if (index !== -1) {
        this.favoriteMovies.splice(index, 1)
        this.updateLocalStorage('favoriteMovies')
        alert('Movie will be removed from favorites.')
      }
    },

    addToUnseenMovies(movie) {
      const allMovies = this.logAllMovies()
      if (!this.allMovies.find((m) => m.id === movie.id)) {
        this.unseenMovies.push(movie)
        this.updateLocalStorage('unseenMovies')
        alert('Movie was successfully added to watchlist.')
      } else {
        alert('Movie is already in the watchlist.')
      }
    },

    removeFromWatchlist(movieId) {
      const index = this.unseenMovies.findIndex((movie) => movie.id === movieId)
      if (index !== -1) {
        this.unseenMovies.splice(index, 1)
        this.updateLocalStorage('unseenMovies')
        alert('Movie will be removed from watchlist.')
      }
    },

    markAsUnseen(movieId) {
      const index = this.seenMovies.findIndex((movie) => movie.id === movieId)
      if (index !== -1) {
        const unseenMovie = this.seenMovies.splice(index, 1)[0]
        this.unseenMovies.push(unseenMovie)

        const notesForMovie = this.notes[movieId]
        // Remove the notes for the movie
        if (notesForMovie) {
          delete this.notes[movieId]
          this.updateLocalStorage('notes')
        }

        const favoriteIndex = this.favoriteMovies.findIndex((movie) => movie.id === movieId)
        if (favoriteIndex !== -1) {
          // If the movie is in favoriteMovies, remove it from favoriteMovies
          this.favoriteMovies.splice(favoriteIndex, 1)
          this.updateLocalStorage('favoriteMovies')
        }

        this.updateLocalStorage('unseenMovies')
        this.updateLocalStorage('notes')
        this.updateLocalStorage('favoriteMovies')
      }
    },

    markAsSeen(movieId) {
      const index = this.unseenMovies.findIndex((movie) => movie.id === movieId)
      if (index !== -1) {
        const seenMovie = this.unseenMovies.splice(index, 1)[0]
        this.seenMovies.push(seenMovie)
        this.updateLocalStorage('unseenMovies')
        this.updateLocalStorage('seenMovies')
      }
    },

    addNoteToMovie({ movieId, note }) {
      this.notes = { ...this.notes, [movieId]: note }
      this.updateLocalStorage('notes')
    },

    getNoteForMovie(movieId) {
      return this.notes[movieId] || ''
    },

    updateLocalStorage(key) {
      updateLocalStorage(key, this[key])
    }
  }
})