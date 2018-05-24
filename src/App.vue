<template>
  <div id="app">
    <header>
      <router-link to="/">VueGround</router-link>
      <router-link class="right" to="createPost">Create Post</router-link>
    </header>
    <main>
      <router-view :posts="posts"></router-view>
    </main>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  name: 'app',
  created () {
    this.setupSnapShot()
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  methods: {
    setupSnapShot () {
      let postsRef = this.$store.state.db.collection('posts')
      postsRef.onSnapshot(posts => {
        this.$store.dispatch('setPosts', posts.docs.map(p => ({...p.data(), id: p.id})))
      })
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header a {
  display: inline-block;
  color: white;
  padding-top: 16px;
  font-size: 20px;
  padding-top: 16px;
  letter-spacing: .02em;
}

.right {
  position: absolute;
  right: 15px;
}
</style>
