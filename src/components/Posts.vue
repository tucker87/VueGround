<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <div>
      <post v-for="post in posts" v-bind:model="post" v-bind:key="post.id"></post>
      <h2 v-if="posts.length == 0">There are no posts! Be the first to post.</h2>
    </div>
  </div>
</template>

<script>
import Post from './Post'
export default {
  name: 'hello',
  props: ['posts'],
  components: {
    Post
  },
  data () {
    return {
      msg: 'Welcome to Your VueGround!'
    }
  }
}
</script>

<style sc>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
