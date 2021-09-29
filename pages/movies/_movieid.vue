<template>
  <div v-if="movie" class="movie-unit">
    <div class="backdrop">
      <div class="votes">
        <h2>{{ movie.vote_average }}</h2>
      </div>
      <TheHomeBtn />
      <img
        :src="responsiveImg(movie.backdrop_path, 780, 1280)"
        alt="movie.original_title"
      />
    </div>
    <div class="poster">
      <img
        :src="responsiveImg(movie.poster_path, 154, 500)"
        alt="movie.original_title"
      />
    </div>
    <div class="movie-title">
      <FavoriteBtn :movie-id="movie.id" />
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
        :to="{
          name: 'genre-moviegenre',
          params: { moviegenre: genre.id, page: 1 },
        }"
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
    <MovieInfo :movie="movie" />
    <Tags id="tags" />
  </div>
</template>

<script>
import FavoriteBtn from '@/components/ui/FavoriteBtn.vue'
import MovieInfo from '@/components/MovieInfo.vue'
import TheHomeBtn from '@/components/ui/TheHomeBtn.vue'
export default {
  components: { FavoriteBtn, MovieInfo, TheHomeBtn },
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
      this.movie = data
    },
    responsiveImg(type, min, max) {
      let res = ''
      if (this.windowWidth <= 500) {
        res = min
      } else {
        res = max
      }
      return `https://image.tmdb.org/t/p/w${res}${type}`
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
  aspect-ratio: 0.68;
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

.tags {
  margin-top: 50px;
  grid-column: 1 / -1;
  grid-row: 8;
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

  .homepage-btn {
    border: 1px solid #727272;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>
