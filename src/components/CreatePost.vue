<template>
  <div>
    <h1>{{ msg }}</h1>
    <label>Title:</label>
    <input type="text" v-model="title" @keyup.enter="createPost"/>
    <input type="button" @click="createPost" value="Submit"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Let\'s make a new post',
      title: ''
    }
  },
  methods: {
    createPost () {
      const { title } = this
      this.$store.dispatch('addPost', { title })
      this.title = ''
    }
  }
}
</script>

<style>
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
