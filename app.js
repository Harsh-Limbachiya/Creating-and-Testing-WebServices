const express = require('express'); //require express from the node
const app = express(); //callback the express function 
const path = require('path'); //require path to add/ join file path
const bodyParser = require('body-parser');
const movies = [
	{
		id: 1,
		name: "Happy Feet",
		rating: 5
	},
	{
		id: 2,
		name: "Lord Of Ring",
		rating: 4.5
	},
	{
		id: 3,
		name: "Jurassic World",
		rating: 4
	}
];



app.use(bodyParser.json());
//send a response for home page
app.get('/', (req, res) => {
	res.status(200).json({"message" : 'home page'});
})

//send file as a response for index
app.get('/index', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '/index.html'));
})

//get all movies from the data
app.get('/api/movies', (req, res) => {
	res.status(200).json({"data": movies });
})

//get a specific movie from the list
app.get('/api/movies/:movieId', (req, res) => {
	const foundMovie = movies.find(movie => movie.id === parseInt(req.params.movieId))
	if (foundMovie) {
		res.status(200).json({
		"data": foundMovie
	})	
	} else {
		res.status(200).json({
			 "Error" : "Movie not found"
		})
	}	
})

//Add a new movie to the existing list
app.post('/api/movies', (req, res) => {
	if (req.body.name) {
		const lastIndex = movies.length - 1;
		const lastId = movies[lastIndex].id;
		const newMovie = {id: lastId + 1, name: req.body.name, rating: req.body.rating};
		movies.push(newMovie);
		return res.status(201).json({ "data": movies });
	}
	res.status(200).json({"Error" : "Movie name required"})
})

//Update the existing movie data from the list
app.put('/api/movies/:movieId', (req, res) => {
	const movieUpdate = movies.find(movie => movie.id === parseInt(req.params.movieId));
	movieUpdate.name = req.body.name;
	movieUpdate.rating = req.body.rating;
	//console.log(movieUpdate.id)
	const movieUpdateIndex = movies.findIndex(movie => movie.id === parseInt(movieUpdate.id));
	//console.log(movieUpdateIndex);
	movies[movieUpdateIndex] = movieUpdate;
	if (movieUpdate){
		return res.status(200).json({"data" : movies})
	}
	res.status(200).json({
		"error": "movie with ID:" + req.params.movieId + " did not get updated"})
})


//delete a movie from the list
app.delete('/api/movies/:movieId', (req, res) => {
	const movieIdx = movies.findIndex(movie => movie.id === parseInt(req.params.movieId));
	if (movieIdx !== -1) {
		movies.splice(movieIdx, 1)
		 return res.status(200).json({"data" : movies})
	}
	res.status(200).json({"error" : "movie with id: " + req.params.movieId + " not deleted" })
	
})
// express property to listen on port 8080
app.listen(8080, () => {
	console.log('Listening on Port: 8080')
})