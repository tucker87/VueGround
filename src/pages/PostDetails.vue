<template>
  <div class="post">
      <div class="header-wrap">
        <div class="header">
            <span class="title">{{ model.title }}</span>
            <span class="like" :class="{ liked: model.isLiked }"></span>      
        </div>
      </div>
      <hr/>
      <div class="body">
          <span class="content">{{ model.content }}</span>
      </div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {}
    }
  },
  beforeCreate () {
    this.$store.getters.getPostById(this.$route.params.id)
      .then(post => { this.model = post })
  },
  methods: {
    setLiked () {
      this.$store.dispatch('setLiked', this.model)
    }
  }
}
</script>

<style scoped>
.post {
    display: inline-block;
    background-color: #5e4a35;
    color: white;
    padding: 5px;
    margin: 5px 0;
    font-size: large;
    border: 1px solid #ccc;
    width: 400px;
}

.header-wrap {
    display: flex;
    justify-content: center;
}

.header {
    display: inline-block;
    padding: 5px;
}

.body {
    padding: 5px;
    background-color: white;
    color: black;
    font-size: medium;
}

.like {
    font-size: x-large;
}

.like:before {
    color: black;
    content: '\2665';
}

.liked:before {
    color: red;
}
</style>
