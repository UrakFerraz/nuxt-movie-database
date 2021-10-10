<template>
  <div v-if="windowWidth > 0" class="movie-card" :style="cardSize()">
    <FavoriteBtn :movie-id="movie.id" :is-fav="isFav" />
    <div
      class="movie-img"
      @mouseover="viewOverview(true)"
      @mouseout="viewOverview(false)"
    >
      <h2 class="review">
        {{ movie.vote_average }}
      </h2>
      <img :src="responsiveImg(movie)" alt="" />
      <div :class="['description', { 'open-description': overview }]">
        <span>{{ movie.overview }}</span>
      </div>
    </div>
    <h3>
      {{ movie.title.slice(0, 25) }}
      <span v-if="movie.title.length > 25">...</span>
    </h3>
    <h4>
      {{ movie.original_title.slice(0, 25) }}
      <span v-if="movie.original_title.length > 25">...</span>
    </h4>
    <nuxt-link
      :id="movie.id"
      :to="{ name: 'movies-movieid', params: { movieid: movie.id } }"
      >Get More Info</nuxt-link
    >
    <div class="release">
      Lançado em:<br />
      {{
        new Date(movie.release_date).toLocaleString('pt-br', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FavoriteBtn from './FavoriteBtn.vue'
export default {
  components: {
    FavoriteBtn,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      windowWidth: 0,
      overview: false,
      isFavorite: this.isfav,
    }
  },
  computed: {
    ...mapGetters(['isFav']),
  },
  mounted() {
    this.windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  },
  methods: {
    getCardWidth() {
      if (this.windowWidth <= 768 && this.windowWidth >= 0) {
        return '154'
      } else if (this.windowWidth <= 2000 && this.windowWidth >= 769) {
        return '185'
      } else if (this.windowWidth >= 2001) {
        return '300'
      }
    },
    viewOverview(value) {
      this.overview = value
    },
    responsiveImg(movie) {
      return `https://image.tmdb.org/t/p/w${this.getCardWidth()}${
        movie.poster_path
      }`
    },
    cardSize() {
      return 'min-width:' + this.getCardWidth() + 'px'
    },
  },
}
</script>

<style scoped>
.movie-card {
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  scroll-snap-align: start;
  padding: 10px;
  opacity: 0;
  animation: fade 1s linear 1s forwards;
}

.movie-card:hover img {
  transform: scale(1.2);
}

@keyframes fade {
  100% {
    opacity: 100;
  }
}
.movie-img {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}
.movie-img img {
  transition: 1s ease all;
  object-fit: fill;
  aspect-ratio: 0.68;
  width: 100%;
  height: 100%;
}
.movie-img .review {
  background-color: rgb(157, 48, 48);
  border-radius: 0 0 5px 5px;
  position: absolute;
  top: 0;
  left: 15px;
  padding: 4px 8px;
  color: #fff;
}
.description {
  position: absolute;
  top: 0;
  left: 0;
  transition: 400ms;
  transform: translateY(101%);
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 10px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

.release {
  color: slategray;
}

.open-description {
  transform: translateY(0);
}

.description::-webkit-scrollbar {
  display: none;
}

.description span {
  color: white;
  font-size: 13px;
}

h3 {
  color: white;
}

h4 {
  color: darkgrey;
}

a {
  color: transparent;
  text-decoration: none;
  color: white;
  border: 1px solid red;
  border-radius: 5px;
  padding: 7px 10px;
  display: block;
  justify-self: start;
  cursor: pointer;
}

a:hover {
  border-color: #fff;
}

a:link {
  color: #fff;
}

@media (min-width: 1500px) {
  .description span {
    font-size: 16px;
  }
  h3 {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 14px;
  }
  h3 {
    font-size: 14px;
  }
  h4 {
    font-size: 12px;
  }
  a {
    font-size: 12px;
  }
  .movie-card {
    width: 120px;
  }

  .release {
    font-size: 12px;
  }
}
</style>
