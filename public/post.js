var postComponent = Vue.component('post', {
    props: ['post'],
    template: `<div class="post" @click="setLike">
                        <span class="title">{{ post.title }}</span>
                        <span class="like" :class="{ liked: post.isLiked }"></span>
                    </div>`,
    methods: {
        setLike(e, p) {
            this.post.isLiked = !this.post.isLiked
        }
    }
})

export default postComponent