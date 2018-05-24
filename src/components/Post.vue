<template>
  <div @click="setLiked">
      <span class="title">{{ model.title }}</span>
      <span class="like" :class="{ liked: model.isLiked }"></span>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: ['model'],
  methods: {
    setLiked () {
      this.$store.dispatch('setLiked', this.model)
    }
  }
}
</script>

<style scoped>
div {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 5px;
    margin: 5px;
    font-size: large;
    cursor: pointer;
}

.like:before {
    color: black;
    content: '\2665';
}

.liked:before {
    color: red;
}
</style>
