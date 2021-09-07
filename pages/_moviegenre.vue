<template>
  <keep-alive>
    <div class="genre-page">
      <TheHomeBtn />
      <h1>{{genre}}</h1>
      <div v-if="moviesByGenre.length != 0" class="movies-grid">
        <base-card v-for="movie in moviesByGenre[0].results" :key="movie.id" :movie="movie"></base-card>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue';
import TheHomeBtn from '@/components/ui/TheHomeBtn.vue';
  export default {
  components: { TheHomeBtn, BaseCard },
    props:{
      genre: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        moviesByGenre: [],
        count: 2
      }
    },
    async fetch() {
      await this.getMoviesByGenre(this.$route.params.moviegenre, this.count)
    },
    fetchDelay: 500,
    methods: {
      async getMoviesByGenre(genre, page) {
        try {
          const apiData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a152faf46b825f190ee05ae333705f56&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`);
          const data = await apiData.json()
          this.moviesByGenre.push(data)
          console.log(this.moviesByGenre[0].results);
        } catch (error) {
          console.log('ERRO FETCH', error);
        }
      },
    }
  }
</script>

<style scoped>
.movies-grid {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  gap: 40px;
  padding: 0 10vw;
}

.genre-page h1 {
  padding: 40px 10vw;
  color: white;
}

@media (max-width: 500px) {
  .movies-grid {
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    column-gap: 10px;
    padding: 20px;
    scroll-snap-type: y proximity;
  }
}
</style>
