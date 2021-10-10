<template>
  <div class="pagination">
    <button :disabled="count === 1" @click.prevent="nextPrev('previous')">
      Anterior
    </button>
    <button :disabled="count === 1" @click.prevent="goToPageNumber(1)">
      Primeira Página
    </button>
    <button
      :disabled="count >= totalpages"
      @click.prevent="goToPageNumber(totalpages)"
    >
      Última Página ({{ totalpages }})
    </button>
    <button :disabled="count >= totalpages" @click.prevent="nextPrev('next')">
      Próxima
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalpages: {
      type: Number,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      count: null,
    }
  },
  beforeMount() {
    this.count = this.$nuxt.context.params.page
  },
  methods: {
    nextPrev(value) {
      if (this.count > 1 && value === 'previous') {
        this.count--
      } else if (this.count < this.totalpages && value === 'next') {
        this.count++
      }
      this.$router.push({
        name: 'last-movies-page-page',
        params: { page: this.count },
      })
    },
    goToPageNumber(number) {
      this.count = number
      this.$router.push({
        name: 'last-movies-page-page',
        params: { page: this.count },
      })
    },
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  margin: 80px 30px 20px 30px;
}

button {
  background-color: transparent;
  border: 1px solid rgb(107, 101, 101);
  border-radius: 5px;
  transition: 0.4s ease all;
  padding: 10px;
  color: white;
  cursor: pointer;
}

button:hover {
  border-color: white;
}
</style>
