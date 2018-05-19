<template>
  <div>
    <h1>{{ msg }}</h1>
    <label>Title:</label>
    <input type="text" v-model="title" @keyup.enter="submit"/>
    <input type="button" @click="submit" value="Submit"/>
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
    submit (e) {
      this.$emit('createPost', this)
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
