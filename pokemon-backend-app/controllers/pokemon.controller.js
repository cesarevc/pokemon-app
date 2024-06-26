const Pokemon = require("../models/pokemon.model.js");

// create a pokemon
const createPokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.create(req.body);
        res.status(201).json(pokemon);
    } catch (error) {
        res.status(500).json({message: `something went wrong: ${error.message}`})
    }
};

//get all pokemons
const getPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find({});
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({message: `something went wrong: ${error.message}`})
    }
};

//get a pokemon by id
const getPokemon = async (req, res) => {
    try {
        const { id } = req.params;
        const pokemon = await Pokemon.findById(id);
        if (!pokemon) {
            return res.status(404).json({message: "Pokemon not found!"})
        }
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({message: `something went wrong: ${error.message}`})
    }
};

// update a pokemon by id
const updatePokemon = async (req, res) => {
    try {
        const { body, params: { id } } = req;
        const pokemon = await Pokemon.findByIdAndUpdate(id, body);

        if (!pokemon) {
            return res.status(404).json({message: "Pokemon not found!"})
        }

        const updatedPokemon = await Pokemon.findById(id);

        res.status(200).json(updatedPokemon);
    } catch (error) {
        res.status(500).json({message: `something went wrong: ${error.message}`})
    }
};


// delete a pokemon by id
const deletePokemon = async (req, res) => {
    try {
        const { body, params: { id } } = req;
        const pokemon = await Pokemon.findByIdAndDelete(id, body);
        if (!pokemon) {
            return res.status(404).json({message: "Pokemon not found!"})
        }
        res.status(200).json({message: "Pokemon deleted successfully!"});
    } catch (error) {
        res.status(500).json({message: `something went wrong: ${error.message}`})
    }
};

module.exports = {
    getPokemons,
    getPokemon,
    createPokemon,
    updatePokemon,
    deletePokemon
};