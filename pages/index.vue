<template>
    <div class="home" keep-alive>
      <the-hero></the-hero>
      <the-search-bar @search-movie="searchMovie"></the-search-bar>
      <base-grid v-if="Object.keys(moviesSearched).length != 0" :movies="moviesSearched" :title="'Busca'"></base-grid>
      <base-grid v-for="(genre, index) in genres" :key="genre.id" :movies="moviesByGenre[index]" :title="genre.name" :genre="genre.id"></base-grid>
    </div>
</template>

<script>
import TheHero from '../components/TheHero.vue'
import TheSearchBar from '../components/TheSearchBar.vue'
import BaseGrid from '../components/ui/BaseGrid.vue'
export default {
  components: { TheHero, BaseGrid, TheSearchBar },
  provide: ['API_KEY', 'lastMovies'],
    data() {
      return {
        genres: [
          {"id":28,"name":"Action"},
          {"id":12,"name":"Adventure"},
          {"id":16,"name":"Animation"},
          {"id":35,"name":"Comedy"},
          {"id":80,"name":"Crime"},
          {"id":99,"name":"Documentary"},
          {"id":18,"name":"Drama"},
          {"id":10751,"name":"Family"},
          {"id":14,"name":"Fantasy"},
          {"id":36,"name":"History"},
          {"id":27,"name":"Horror"},
          {"id":10402,"name":"Music"},
          {"id":9648,"name":"Mystery"},
          {"id":10749,"name":"Romance"},
          {"id":878,"name":"Science Fiction"},
          {"id":10770,"name":"TV Movie"},
          {"id":53,"name":"Thriller"},
          {"id":10752,"name":"War"},
          {"id":37,"name":"Western"}
        ],
        API_KEY: 'a152faf46b825f190ee05ae333705f56',
        lastMovies: null,
        moviesByGenre: [],
        moviesSearched: {}
      }
    },
    async fetch() {
      await this.getLastMovies()
      for (const genre of this.genres) {
        await this.getMoviesByGenre(genre.id)
      }
    },
    fetchDelay: 500,
    methods: {
      async getLastMovies() {
        try {
          const apiData = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=pt-BR&page=1`);
          const data = await apiData.json()
          this.lastMovies = {...data}
        } catch (error) {
          console.log('ERRO FETCH', error);
        }
      },
      async getMoviesByGenre(genre) {
        try {
          const apiData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`);
          const data = await apiData.json()
          console.log(data);
          this.moviesByGenre.push(data)
        } catch (error) {
          console.log('ERRO FETCH', error);
        }
      },
      async searchMovie(payload) {
        try {
          const apiData = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=pt-BR&query=${payload}&page=1&include_adult=false`);
          const data = await apiData.json()
          this.moviesSearched = {...data}
        } catch (error) {
          console.log('ERRO FETCH', error);
        }
      }
    }
}
</script>

<style scoped>
.home {
  scroll-snap-type: y proximity;
}
</style>
