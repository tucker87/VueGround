import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/pages/Posts'
import CreatePost from '@/pages/CreatePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/createPost',
      name: 'New Post',
      component: CreatePost
    }
  ]
})
