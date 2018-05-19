<template>
  <div @click="setLike">
      <span class="title">{{ model.title }}</span>
      <span class="like" :class="{ liked: model.isLiked }"></span>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: ['model'],
  methods: {
    setLike () { this.model.isLiked = !this.model.isLiked }
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
}

.like:before {
    color: black;
    content: '\2665';
}

.liked:before {

    color: red;
}
</style>
