<template>
  <keep-alive>
    <section>
      <h1 :title="title">{{ title }}</h1>
      <div id="movie-grid-row" class="movie-grid-row">
        <div class="movie-grid-content">
          <BaseCard
            v-for="movie in movies.results"
            :id="movie.id"
            :key="movie.id"
            :movie="movie"
          />
          <nuxt-link
            class="next-page"
            :to="{
              name: 'genre-moviegenre',
              params: { moviegenre: genre, page: 1 },
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              viewBox="0 0 257.6 451.8"
            >
              <path
                d="M248.3,248.3L54,442.6c-12.4,12.4-32.4,12.4-44.7,0c-12.4-12.4-12.4-32.4,0-44.7l171.9-171.9L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l194.3,194.3c6.2,6.2,9.3,14.3,9.3,22.4C257.6,234,254.5,242.1,248.3,248.3z"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </section>
  </keep-alive>
</template>

<script>
import BaseCard from './BaseCard.vue'
export default {
  components: {
    BaseCard,
  },
  props: {
    movies: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
section {
  margin-top: 30px;
  padding-block: 10px;
  scroll-snap-align: start;
}
.movie-grid-content {
  display: flex;
  gap: 10px;
}
.movie-grid-row {
  overflow-x: scroll;
  padding: 20px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}

.movie-grid-row::-webkit-scrollbar {
  display: none;
}
h1 {
  color: white;
  margin-left: 20px;
}

.next-page {
  display: flex;
  border-radius: 6px 0 0 6px;
  background-color: white;
  align-self: center;
  padding: 10px;
  align-content: flex-end;
  align-items: center;
  opacity: 0;
  animation: fade_btn 1s 3s forwards;
}

.next-page:hover {
  background-color: rgb(180, 172, 172);
}

@keyframes fade_btn {
  100% {
    opacity: 1;
  }
}
</style>
