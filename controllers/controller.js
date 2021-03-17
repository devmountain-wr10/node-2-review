const movies = [
    { id: 1, title: 'Star Wars: Revenge of the Sith' },
    { id: 2, title: 'Chaos Walking' },
    { id: 3, title: 'Avengers Endgame' }
]
let id = 4

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    addMovie: (req, res) => {
        console.log(req.body)
        const newMovie = {
            id,
            title: req.body.title
        }

        id++
        movies.push(newMovie)

        res.status(200).send(movies)
    },
    updateTitle: (req, res) => {
        const { id } = req.params
        const { title } = req.body

        const foundMovie = movies.find(element => element.id === +id)
        foundMovie.title = title

        // const index = movies.findIndex(element => element.id === +id)
        // movies[index].title = title

        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const { id } = req.params

        const index = movies.findIndex(e => e.id === +id)
        movies.splice(index, 1)

        res.status(200).send(movies)
    }
}