var app = new Vue({
    el: "#Main",
    data: {
        appName: "Vue Ground",
        posts: [
            { id: 0, title: "Cat Tax", isLiked: true }, 
            { id: 1, title: "Not a repost", isLiked: false },
            { id: 2, title: "DUMP!", isLiked: false },
            { id: 3, title: "Hot chick", isLiked: true },
            { id: 4, title: "Send Nudes", isLiked: false },
        ]
    },
    computed:{
        likedPosts() {
            return this.posts.filter(p => p.isLiked).length;
        }
    }
})