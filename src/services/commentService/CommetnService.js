export class CommentService {

    url =  'https://jsonplaceholder.typicode.com/comments';

    onDisplayComments() {

        return fetch(this.url)
            .then(value => value.json())
            .then(value => value)
    }

        onDisplayId(id){
            return fetch(`${this.url}/${id}`)
                .then(value => value.json())
                .then(value => value)
        }
}