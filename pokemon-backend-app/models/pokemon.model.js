const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema(
    // id, name, type, color, abilities, forms, height, order, specie, stats, weight, image
    {
        name: {
            type: String,
            required: [true, "Please enter an available name for this Pokemon!"]
        },
        type: {
            type: String,
            required: [true, "Please enter an available type for this Pokemon!"]
        },
        color: {
            type: String,
            required: [true, "Please enter an available color for this Pokemon!"]
        },
        abilities: [String],
        forms: [String],
        height: {
            type: Number,
            required: false
        },
        order: {
            type: Number,
            required: false
        },
        specie: {
            type: String,
            required: false
        },
        stats: [String],
        weight: {
            type: Number,
            required: false
        },
        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
    }
);

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;