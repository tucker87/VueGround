import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  posts: []
}

const mutations = {
  setPosts (state, { posts }) {
    state.posts = posts
  },
  addPost (state, { title }) {
    state.posts.push({ title })
  },
  setLiked (state, { post, isLiked }) {
    post.isLiked = isLiked
  }
}

const actions = {
  setPosts: ({ commit }) => commit('setPosts'),
  addPost: ({ commit }) => commit('addPost')
}

const getters = {
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
