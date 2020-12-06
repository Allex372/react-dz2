export  class PostsService {

    url = 'https://jsonplaceholder.typicode.com/posts'

    onGetPost(){
        return fetch(this.url)
            .then(value => value.json())
            .then(value => value)
    }

    getPostsById(id){
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value)
    }
}