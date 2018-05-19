// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App v-bind:posts="posts" />',
  components: { App },
  data: {
    posts: [
      { id: 0, title: 'Cat Tax', isLiked: true },
      { id: 1, title: 'Not a repost', isLiked: false },
      { id: 2, title: 'DUMP!', isLiked: false },
      { id: 3, title: 'Hot chick', isLiked: true },
      { id: 4, title: 'Send Nudes', isLiked: false }
    ]
  }
})
