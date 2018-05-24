<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="field-wrap">
      <label>Title:</label>
      <input type="text" v-model="title"/>
    </div>
    <div class="field-wrap">
      <label>Content:</label>
      <textarea v-model="content"/>
    </div>
    <input type="button" @click="createPost" value="Submit"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Let\'s make a new post',
      title: '',
      content: ''
    }
  },
  methods: {
    createPost () {
      this.$store.dispatch('addPost', this)
      this.title = ''
    }
  }
}
</script>

<style>
.field-wrap {
  margin: 10px;
}

textarea {
  width: 170px;
  height: 100px;
}

label {
    display: inline-block;
    width:100px;
    text-align: right;
}
</style>
