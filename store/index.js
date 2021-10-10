export const state = () => ({
  favs: []
})

export const mutations = {
  increment(state, movieId) {
    state.favs.push(movieId)
  },
  removeFav(state, movieId) {
    const isFav = state.favs.indexOf(movieId)
    state.favs.splice(isFav, 1)
  }
}

export const actions = {
  toggle(context, movieId) {
    const isFav = context.state.favs.includes(movieId.value)
    if (!isFav) {
      context.commit('increment', movieId.value)
    } else {
      context.commit('removeFav', movieId.value)
    }
  }
}

export const getters = {
  isFav(state, movieId) {
    const isFav = state.favs.includes(movieId.value)
    return isFav
  }
}
