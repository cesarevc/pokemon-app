const express = require("express");
const Pokemon = require("../models/pokemon.model.js");
const router = express.Router();
const { getPokemons, getPokemon, createPokemon, updatePokemon, deletePokemon } = require('../controllers/pokemon.controller.js');


// Get all pokemons
router.get('/', getPokemons);

// Get a pokemon by id
router.get("/:id", getPokemon);

// Create a pokemon
router.post("/", createPokemon);

// Update a product
router.put("/:id", updatePokemon);

// Delete a product
router.delete("/:id", deletePokemon);

module.exports = router;