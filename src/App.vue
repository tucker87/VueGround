<template>
  <div id="app">
    <header>
      <span>VueGround</span>
      <router-link to="createPost">Create Post</router-link>
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

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

header a {
  display: inline;
  color: white;
  position: absolute;
  right: 15px;
}
</style>
