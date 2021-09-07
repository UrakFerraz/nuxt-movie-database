<template>
  <keep-alive>
    <div v-if="movie" class="movie-unit">
      <div class="backdrop">
        <div class="votes">
          <h2>{{ movie.vote_average }}</h2>
        </div>
        <TheHomeBtn />
        <img :src="responsiveImg(movie.backdrop_path, 780, 1280)" alt="movie.original_title" />
      </div>
      <div class="poster">
        <img :src="responsiveImg(movie.poster_path, 154, 500)" alt="movie.original_title" />
      </div>
      <div class="movie-title">
        <h1>{{ movie.title }}</h1>
        <h3>{{ movie.original_title }}</h3>
      </div>
      <ul class="gengers-tags">
        <h4 class="subtitle">Genres</h4>
        <nuxt-link
          v-for="genre in movie.genres"
          :key="genre.id"
          class="button button-light"
          :genre="genre.name"
          :to="{name: 'moviegenre', params: {moviegenre: genre.id}}"
        >
          {{ genre.name }}
        </nuxt-link>
      </ul>
      <ul class="overview">
        <li>
          <h4 class="subtitle">Overview</h4>
          <p>{{ movie.overview }}</p>
        </li>
        <li>
          <h4 class="subtitle">Release Date</h4>
          <p>{{ movie.release_date }}</p>
        </li>
        <li>
          <h4 class="subtitle">Duration</h4>
          <p>{{ movie.runtime }} min</p>
        </li>
        <li>
          <h4 class="subtitle">Popularity</h4>
          <p>{{ movie.popularity }}</p>
        </li>
        <li>
          <h4 class="subtitle">Budget</h4>
          <p>
            {{
              new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'USD',
              }).format(movie.budget)
            }}
          </p>
        </li>
      </ul>
      <div class="more-info">
        <a
          class="imdb"
          :href="'https://www.imdb.com/title/' + movie.imdb_id"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32">
            <rect width="100%" height="100%" rx="4" fill="#F5C518" />
            <path
              d="M8 25h5V7H8zM23.673 7l-1.12 8.408-.695-4.573A126.174 126.174 0 0021.278 7H15v18h4.242l.016-11.886L21.044 25h3.02l1.694-12.148L25.771 25H30V7h-6.327zM32 25V7h7.805A3.185 3.185 0 0143 10.177v11.646A3.185 3.185 0 0139.805 25H32zm5.832-14.76c-.198-.108-.577-.16-1.13-.16v11.811c.73 0 1.178-.13 1.346-.404.168-.27.254-1 .254-2.2v-6.98c0-.813-.03-1.333-.086-1.563a.736.736 0 00-.384-.504zM52.43 11.507h.32c1.795 0 3.25 1.406 3.25 3.138v7.217C56 23.595 54.545 25 52.75 25h-.32a3.282 3.282 0 01-2.658-1.332l-.288 1.1H45V7h4.784v5.78a3.387 3.387 0 012.646-1.273zm-1.024 8.777V16.02c0-.705-.046-1.167-.14-1.38-.094-.213-.47-.35-.734-.35s-.671.111-.75.299v7.219c.09.206.478.32.75.32.271 0 .666-.11.75-.32.082-.209.124-.719.124-1.523z"
            />
          </svg>
        </a>
        <a :href="movie.homepage" target="_blank" rel="noopener noreferrer">
          Homepage
        </a>
        <ul class="production-companies">
          <h4 class="subtitle">Production Companies</h4>
          <li v-for="company in movie.production_companies" :key="company.id">
            <div v-if="company.logo_path != null" class="company">
              <img :src="responsiveImg(company.logo_path, 92, 154)" :alt="company.name">
            </div>
            <h2 v-else>NO LOGO</h2>
            <p>{{company.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import TheHomeBtn from '@/components/ui/TheHomeBtn.vue'
export default {
  components: { TheHomeBtn },
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
      movie: null,
      windowWidth: 1024,
      moviesByGenre: [],
      resultsLoaded: false,
    }
  },
  async fetch() {
    await this.getMovie()
  },
  watch: {
    '$route': '$fetch'
  },
  fetchOnServer: false,
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  mounted() {
    this.windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  },
  methods: {
    async getMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=a152faf46b825f190ee05ae333705f56&language=pt-BR`
      )
      const data = await res.json()
      console.log('fetch movieid', data)
      this.movie = data
      console.log(this.movie)
    },
    responsiveImg(type, min, max) {
      let res = ''
      if (this.windowWidth <= 500) {
        res = min
      } else {
        res = max
      }
      return `https://image.tmdb.org/t/p/w${res}/${type}`
    },
  },
}
</script>

<style scoped>
.movie-unit {
  display: grid;
  grid-template-columns: 1fr repeat(12, 5vw) 1fr;
  grid-template-rows: 2fr auto auto 120px auto;
  gap: 12px;
  padding-bottom: 200px;
}

.backdrop {
  position: relative;
  width: 100%;
  overflow: hidden;
  grid-column: 1 / -1;
  grid-row: 1 / 4;
  min-height: 500px;
}
.backdrop img {
  object-position: center;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.backdrop::after {
  content: '';
  background: linear-gradient(rgba(33, 31, 31, 0.6), rgba(33, 31, 31, 100));
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  position: absolute;
}

.movie-title {
  grid-column: 7 / -2;
  grid-row: 2 / 3;
  z-index: 3;
  padding: 20px;
  backdrop-filter: blur(10px);
  align-self: start;
  justify-self: start;
  background: rgba(168, 160, 160, 0.05);
  border-radius: 5px;
}

.movie-title * {
  color: white;
}

.movie-title h1 {
  margin-bottom: 10px;
}

.poster {
  grid-column: 2 / 6;
  grid-row: 2 / 6;
  width: 100%;
  aspect-ratio: 0.666666666666667;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 30px black;
}

.poster img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}


.votes {
  position: absolute;
  left: -20px;
  top: 40px;
  background-color: #fff;
  z-index: 10;
  padding: 6px;
  border-radius: 5px;
}

.votes h2 {
  padding-left: 20px;
}

.gengers-tags {
  grid-column: 7 / -2;
  grid-row: 3 / 4;
  z-index: 3;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  gap: 10px;
}

.overview {
  grid-column: 7 / -2;
  grid-row: 4 / 6;
  display: flex;
  flex-flow: row wrap;
  row-gap: 10px;
  column-gap: 40px;
}

.overview li:first-child {
  flex: 100%;
}

li {
  margin: 0;
  list-style: none;
  padding: 0;
}

.overview p {
  color: white;
  line-height: 1.6;
}
.subtitle {
  margin-top: 20px;
  margin-bottom: 5px;
  color: rgb(142, 142, 142);
  flex: 100%;
}

.more-info {
  grid-column: 2 / -2;
  grid-row: 7;
  padding: 20px;
  border-block: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 60px;
  display: flex;
  gap: 60px;
  align-items: center;
  flex-flow: row wrap;
}

.more-info a {
  color: white;
  text-decoration: none;
}

.similares {
  margin-top: 50px;
  grid-column: 1 / -1;
  grid-row: 8;
}

.imdb svg {
  width: 70px;
}

.production-companies {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  align-items: center;
  padding: 20px;

}

.production-companies li {
  border-radius: 10px;
  display: flex;
  gap: 20px;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px;
  background-color: rgba(255,255,255,.3);
}

.company {
  display: flex;
  flex-flow: column;
  width: 70px;
  height: 70px;
  position: relative;
}

.company img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.production-companies h2 {
  text-align: center;
  color: rgba(255, 255, 255, 0.2)
}

.production-companies p {
  text-align: center;
  font-size: 12px;
  color: #fff;
}

@media (max-width: 768px) {
  .movie-unit {
    grid-template-columns: 1fr 80vw 1fr;
    grid-template-rows: 200px auto 30px auto auto auto;
    gap: 30px;
    padding-bottom: 100px;
  }

  .poster {
    margin-top: 40px;
    grid-column: 2 / -2;
    grid-row: 3 / 5;
    max-height: 300px;
    align-self: center;
    justify-self: center;
  }

  .backdrop {
    grid-row: 1 / 3;
    grid-column: 1 / -1;
    min-height: 200px;
  }

  .backdrop::after {
    content: '';
    background: linear-gradient(rgba(33, 31, 31, 0.4), rgba(33, 31, 31, 100));
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }

  .movie-title {
    font-size: 12px;
    grid-row: 2 / 4;
  }

  .gengers-tags {
    grid-row: 5 / 6;
  }

  .overview {
    grid-row: 6 / 7;
  }

  .gengers-tags,
  .overview,
  .movie-title {
    grid-column: 2 / -2;
  }
}

</style>
