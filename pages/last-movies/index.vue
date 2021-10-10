<template>
  <keep-alive>
    <div class="genre-page">
      <h2>Last Movies</h2>
      <TheHomeBtn />
      <div class="movies-grid">
        <BaseCard v-for="movie in lastMovies" :key="movie.id" :movie="movie" />
      </div>
      <ThePaginationLastMovies :totalpages="totalPages" />
      <Tags />
    </div>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      lastMovies: null,
      count: 1,
      totalPages: 30,
    }
  },
  async fetch() {
    this.count = this.$nuxt.context.params.page
    await this.getLastMovies(this.count)
  },
  methods: {
    async getLastMovies() {
      try {
        const apiData = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=a152faf46b825f190ee05ae333705f56&language=pt-BR&page=${this.count}`
        )
        const data = await apiData.json()
        this.lastMovies = { ...data.results }
      } catch (error) {}
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
