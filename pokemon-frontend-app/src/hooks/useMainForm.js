// import {useEffect, useState } from 'react';
// import { getPokemons } from '../services/pokemonApi';

// const useMainForm = () => {
//     const [form, setForm] = useState({});
//     const [formErrors, setFormErrors] = useState({});

//     const setField = (field, value) => {
//         setForm({
//             ...form,
//             [field]: value
//         })

//         if(!!formErrors[field]) {
//             setFormErrors({
//                 ...formErrors,
//                 [field]: null
//             })
//         }

//     }

//     const validateForm = () => {
//         const { inputName, inputType, inputColor } = form;

//         const newErrors = {};

//         if(!inputName || inputName ==='') {
//             newErrors.inputName = 'Please enter a valid Name.'
//         }

//         if(!inputType || inputType ==='') {
//             newErrors.inputType = 'Please enter a valid Type.'
//         }

//         if(!inputColor || inputColor ==='') {
//             newErrors.inputColor = 'Please enter a valid Color.'
//         }

//         console.log(newErrors)
//         return newErrors;
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const errors = validateForm();

//         if(Object.keys(errors).length > 0) {
//             setFormErrors(errors);
//         }

//         console.log(form);
//     }

//     // const [loading, setLoading] = useState(false);
//     // const [pokemons, setPokemons] = useState([]);
//     // const [newPokemon, setNewPokemon] = useState(true);

//     // useEffect(() => {
//     //     setLoading(true);
//     //     // get the pokemon list

//     //      getPokemons().then(data => {
//     //         console.log(data)
//     //         setPokemons(data);
//     //         console.log(pokemons)

//     //         setLoading(false);
//     //     })
//     // }, []);

//     return [handleSubmit, validateForm, setField, form, formErrors]
// }

// export default useMainForm;