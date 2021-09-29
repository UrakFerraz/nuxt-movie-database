<template>
  <keep-alive>
    <div class="genre-page">
      <h2>{{ genreName }}</h2>
      <TheHomeBtn />
      <div v-if="moviesByGenre.length != 0" class="movies-grid">
        <BaseCard
          v-for="movie in moviesByGenre[0].results"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <ThePagination :totalpages="totalPages" />
      <Tags />
    </div>
  </keep-alive>
</template>

<script>
import ThePagination from '@/components/ui/ThePagination.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import TheHomeBtn from '@/components/ui/TheHomeBtn.vue'
import Tags from '@/components/Tags.vue'
export default {
  components: { TheHomeBtn, BaseCard, Tags, ThePagination },
  data() {
    return {
      moviesByGenre: [],
      count: 1,
      genreName: null,
      genreId: null,
      totalPages: null,
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
    }
  },
  async fetch() {
    this.count = this.$nuxt.context.params.page
    await this.getMoviesByGenre(this.$route.params.moviegenre, this.count)
  },
  methods: {
    async getMoviesByGenre(genre, page) {
      try {
        this.selectedGenre()
        const apiData = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=a152faf46b825f190ee05ae333705f56&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`
        )
        const data = await apiData.json()
        this.moviesByGenre.push(data)
        this.totalPages = data.total_pages
      } catch (error) {
        console.log('ERRO FETCH', error)
      }
    },
    selectedGenre() {
      this.genres.forEach((genre) => {
        if (genre.id === this.$route.params.moviegenre) {
          this.genreName = genre.name
          this.genreId = genre.id
        }
      })
    },
  },
}
</script>

<style scoped>
.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding: 0 10vw;
}

h2 {
  color: white;
  padding: 40px;
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
