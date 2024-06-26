import React from 'react';
import { Table, Button } from 'react-bootstrap';


const TableList = ({pokemons}) => {

    const listPokemons = pokemons.map((pokemon) =>
        <tr key={pokemon._id}>
            <td>{pokemon.name}</td>
            <td>{pokemon.type}</td>
            <td>{pokemon.color}</td>
        </tr>
    );

    return(<>
        <h5>All the Pokémons that exist in the world!</h5>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                {listPokemons}
            </tbody>
        </Table>
    </>)
}

export default TableList;