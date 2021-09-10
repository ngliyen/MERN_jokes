const Joke = require("../models/jokes.model");

module.exports.testing = () => {
  return "Am I in the controller";
};

// find all jokes
module.exports.findAllJokes = (req,res) => {
  Joke.find()
    .then(allJokes => res.json(allJokes))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

// find a single joke
module.exports.findJokeById = (req,res) => {
  Joke.findOne({_id:req.params.id})
    .then(joke => res.json(joke))
    .catch(err => res.json({message: "Something went wrong", error: err}));
}

// create a joke
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// update a joke
module.exports.updateJoke = (req,res) => {
  Joke.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(updatedJoke => res.json(updatedJoke))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// delete a joke by id
module.exports.deleteJokeById = (req,res) => {
  Joke.deleteOne({_id:req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}