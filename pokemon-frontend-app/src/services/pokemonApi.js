const apiURL = `http://localhost:3000/api/v1/pokemon`;

const createPokemon = (payload) => {
    return fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .catch( err => console.log(err))
}


const getPokemons = () => {
    return fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json()).then( res => res)
    .catch( err => console.log(err))
}

const deletePokemon = (id) => {
    return fetch(`${apiURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json()).then( res => res)
    .catch( err => console.log(err))
}

export { createPokemon, getPokemons, deletePokemon };