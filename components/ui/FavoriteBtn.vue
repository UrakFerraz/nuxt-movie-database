<template>
  <button class="fav-btn" @click.prevent="favMovie(movieId)">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.4 90.7">
      <g :class="fav ? 'fav-icon-check-active' : 'fav-icon-check'">
        <polygon
          fill="#AD4444"
          points="47.7,4.5 61.1,31.7 91.1,36 69.4,57.2 74.5,87.1 47.7,73 20.9,87.1 26,57.2 4.3,36 34.3,31.7"
        />
      </g>
      <g id="fav-icon">
        <polygon
          fill="none"
          stroke="#AF2727"
          stroke-width="4"
          stroke-miterlimit="10"
          points="47.7,4.5 61.1,31.7 91.1,36 69.4,57.2 74.5,87.1 47.7,73 20.9,87.1 26,57.2 4.3,36 34.3,31.7"
        />
      </g>
    </svg>
  </button>
</template>

<script>
export default {
  provide: ['movieId', 'fav'],
  props: {
    movieId: {
      type: Number,
      required: false,
      default: null,
    },
  },
  emits: ['fav-movie'],
  data() {
    return {
      fav: false,
      id: null,
    }
  },
  methods: {
    favMovie(id) {
      this.fav = !this.fav
      this.id = id
    },
  },
}
</script>

<style scoped>
.fav-btn {
  transition: 0.1s ease all;
  width: 40px;
  height: 40px;
  display: block;
  position: absolute;
  right: 20px;
  top: -15px;
  z-index: 3;
  background-color: transparent;
  border: none;
  outline: none;
  transform: scale(1);
}

.fav-btn:hover {
  transform: scale(0.85);
}

.fav-btn:hover .fav-icon-check {
  opacity: 0.5;
}

svg {
  width: 100%;
  height: 100%;
  display: block;
  filter: drop-shadow(0 0 2px black);
}

.fav-icon-check {
  opacity: 0;
}

.fav-icon-check-active {
  opacity: 1;
}
</style>
