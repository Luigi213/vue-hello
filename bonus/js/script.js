const {createApp} = Vue;

createApp({
    data() {
        return {
            message: 'Ciao Vue',
            photo: 'https://i.picsum.photos/id/2/300/300.jpg?hmac=18v9hYebAqcHuhqDo_PgGIHxZ5Ay-8Di7TqUUS5ZvXY'
        }
    }
}).mount('#app')