import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../firebase'

let db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

let postsRef = db.collection('posts')

Vue.use(Vuex)

const state = {
  db,
  posts: []
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  addPost (state, { title }) {
    postsRef.add({ title, isLiked: false })
  },
  setLiked (state, { post, isLiked }) {
    post.isLiked = isLiked
  }
}

const actions = {
  setPosts: ({ commit }, posts) => commit('setPosts', posts),
  addPost: ({ commit }, post) => commit('addPost', post),
  setLiked: ({ commit }) => commit('setLiked')
}

const getters = {
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
