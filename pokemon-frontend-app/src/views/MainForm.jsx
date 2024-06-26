import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
// import usePokemon from '../hooks/usePokemon';
import TableList from '../components/TableList';
import { getPokemons, createPokemon } from '../services/pokemonApi';



const MainForm = () => {

    const [form, setForm] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {
        setLoading(true);

        getPokemons().then(data => {
            setPokemons(data);
            console.log(pokemons)

            setLoading(false);
        })
    }, []);


    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })

        if(!!formErrors[field]) {
            setFormErrors({
                ...formErrors,
                [field]: null
            })
        }

    }

    const validateForm = () => {
        const { name, type, color } = form;

        const newErrors = {};

        if(!name || name ==='') {
            newErrors.name = 'Please enter a valid Name.'
        }

        if(!type || type ==='') {
            newErrors.type = 'Please enter a valid Type.'
        }

        if(!color || color ==='') {
            newErrors.color = 'Please enter a valid Color.'
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();

        if(Object.keys(errors).length > 0) {
            setFormErrors(errors);
        }

        const { name, type, color, abilities, stats, forms } = form;
        const objForm = {
            name,
            type,
            color,
            abilities: abilities ? abilities.split(',') : [],
            stats: stats ? stats.split(',') : [],
            forms: forms ? forms.split(',') : []
        };

        createPokemon(objForm).then(res =>{
            setLoading(true);
            setForm({name: '', type: '', color: '', abilities: '', stats: '', forms: ''})

            getPokemons().then(data => {
                setPokemons(data);
                setLoading(false);
            })
        })
    }

    return(
        <FormContainer>
            <Form className="main-form">
                <h4>Lets to create a new Pokémon</h4>
                <Form.Group controlId='name'>
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='write the name...'
                        value={form.name}
                        aria-describedby="nameHelpBlock"
                        onChange={e => setField('name', e.target.value)}
                        isInvalid={!!formErrors.name}
                    />
                    <Form.Text id="nameHelpBlock" muted>
                        The name must contain letters or numbers.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {formErrors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='type'>
                    <Form.Label>Type *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='write the type...'
                        value={form.type}
                        onChange={e => setField('type', e.target.value)}
                        isInvalid={!!formErrors.type}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formErrors.type}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='color'>
                    <Form.Label>Color *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='write the color...'
                        value={form.color}
                        onChange={e => setField('color', e.target.value)}
                        isInvalid={!!formErrors.color}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formErrors.color}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='abilities'>
                    <Form.Label>abilities</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='write the abilities...'
                        value={form.abilities}
                        onChange={e => setField('abilities', e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='stats'>
                    <Form.Label>stats</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='write the stats...'
                        value={form.stats}
                        onChange={e => setField('stats', e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='forms'>
                    <Form.Label>forms</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='write the forms...'
                        value={form.forms}
                        onChange={e => setField('forms', e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='submit'>
                    {
                        loading ? <h6> loading ...</h6> :
                        <Button type='submit' className='my-2' onClick={handleSubmit} variant='primary' isloading={loading}>
                            Create
                        </Button>
                    }
                </Form.Group>
            </Form>
            <TableList pokemons={pokemons}/>
        </FormContainer>
    )
}

export default MainForm;