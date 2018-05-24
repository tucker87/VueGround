import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/pages/Posts'
import CreatePost from '@/pages/CreatePost'
import PostDetails from '@/pages/PostDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: CreatePost
    },
    {
      path: '/post/:id',
      name: 'postDetails',
      component: PostDetails
    }
  ]
})
