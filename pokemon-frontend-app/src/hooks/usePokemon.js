// import {useEffect, useState } from 'react';
// import { getPokemons } from '../services/pokemonApi';

// const usePokemon = () => {

//     const [loading, setLoading] = useState(false);
//     const [pokemons, setPokemons] = useState([]);
//     const [newPokemon, setNewPokemon] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         // get the pokemon list
//          getPokemons().then(data => {
//             setPokemons(data);
//             setLoading(false);
//         })
//     }, []);

//     return [loading, pokemons]
// }

// export default usePokemon;