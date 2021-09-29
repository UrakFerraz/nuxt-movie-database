<template>
  <div class="search">
    <input v-model.trim="searchMovie" type="text" @keyup.enter="search" />
    <button class="button" @click="search">Buscar</button>
  </div>
</template>

<script>
export default {
  emits: ['search-movie'],
  data() {
    return {
      searchMovie: '',
    }
  },
  methods: {
    search() {
      if (this.searchMovie.length > 0) {
        this.$emit('search-movie', this.searchMovie)
      }
    },
  },
}
</script>

<style scoped>
.search {
  display: flex;
  padding: 32px 16px;
}
.search input {
  max-width: 350px;
  width: 100%;
  padding: 12px 6px;
  font-size: 14px;
  border: none;
}
.search input:focus {
  outline: none;
}
.search .button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
