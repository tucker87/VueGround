import routes from './routes.js'
import post from './post.js'

var app = new Vue({
    el: "#Main",
    data: {
        appName: "Vue Ground",
        currentRoute: window.location.pathname,
        posts: [
            { id: 0, title: "Cat Tax", isLiked: true }, 
            { id: 1, title: "Not a repost", isLiked: false },
            { id: 2, title: "DUMP!", isLiked: false },
            { id: 3, title: "Hot chick", isLiked: true },
            { id: 4, title: "Send Nudes", isLiked: false },
        ]
    },
    computed:{
        ViewComponent () {
            return routes[this.currentRoute] || NotFound
          },      
        likedPosts() {
            return this.posts.filter(p => p.isLiked).length;
        }
    }
})