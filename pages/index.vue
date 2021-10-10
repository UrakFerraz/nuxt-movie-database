<template>
  <div class="home" keep-alive>
    <TheHero />
    <TheSearchBar @search-movie="searchMovie" />
    <LazyBaseGrid
      v-if="Object.keys(moviesSearched).length != 0"
      :movies="moviesSearched"
      :title="'Busca'"
    />
    <LazyBaseGrid
      v-for="(genre, index) in genres"
      :key="genre.id"
      :movies="moviesByGenre[index]"
      :title="genre.name"
      :genre="genre.id"
    />
    <Tags />
  </div>
</template>

<script>
import TheHero from '@/components/TheHero.vue'
import TheSearchBar from '@/components/TheSearchBar.vue'
export default {
  components: { TheHero, TheSearchBar },
  data() {
    return {
      genres: [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 16, name: 'Animation' },
        { id: 35, name: 'Comedy' },
        { id: 80, name: 'Crime' },
        { id: 99, name: 'Documentary' },
        { id: 18, name: 'Drama' },
        { id: 10751, name: 'Family' },
        { id: 14, name: 'Fantasy' },
        { id: 36, name: 'History' },
        { id: 27, name: 'Horror' },
        { id: 10402, name: 'Music' },
        { id: 9648, name: 'Mystery' },
        { id: 10749, name: 'Romance' },
        { id: 878, name: 'Science Fiction' },
        { id: 10770, name: 'TV Movie' },
        { id: 53, name: 'Thriller' },
        { id: 10752, name: 'War' },
        { id: 37, name: 'Western' },
      ],
      API_KEY: 'a152faf46b825f190ee05ae333705f56',
      moviesByGenre: [],
      moviesSearched: {},
    }
  },
  async fetch() {
    for (const genre of this.genres) {
      await this.getMoviesByGenre(genre.id)
    }
  },
  watch: {
    $route: '$fetch',
  },
  methods: {
    async getMoviesByGenre(genre) {
      try {
        const apiData = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`
        )
        const data = await apiData.json()
        this.moviesByGenre.push(data)
      } catch (error) {}
    },
    async searchMovie(payload) {
      try {
        const apiData = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=pt-BR&query=${payload}&page=1&include_adult=false`
        )
        const data = await apiData.json()
        this.moviesSearched = { ...data }
      } catch (error) {}
    },
  },
}
</script>

<style scoped>
.home {
  scroll-snap-type: y proximity;
}
</style>
