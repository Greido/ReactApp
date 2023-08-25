import React, { useState,useEffect } from 'react';
import { Grid,
        Card,
        CardContent,
        Typography,
        Pagination, 
        Avatar}
        from '@mui/material';

import { useSelector,useDispatch } from 'react-redux';
import {getPokes} from '../store/actions/pokeActions';

function Pokedex() {

    const dispatch = useDispatch()
    const pokeDex = useSelector((state) => state.pokemons.pokedex);
    

    useEffect(()=>{
        dispatch(getPokes())
    },[dispatch])

/*     useEffect(()=>{
        console.log(pokeDex)
    },[pokeDex])  */

        // En lugar de mapear directamente, vamos a realizar la paginación aquí
        const itemsPerPage = 12; // Aqui le especificamos cuantos pokemon mostrar por pagina
        const [page, setPage] =useState(1);

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;


        const pokemonsToShow = pokeDex.slice(startIndex, endIndex);

    return (
        <>
            <Grid container spacing={2} sx={{marginTop:'1%',padding:2}}>
                {pokemonsToShow.map((pokemon, index) => (
                        <Grid item xs='12' sm='6' md="4" 
                        sx={{height:'auto',}}
                        key={index}>
                            <Card>
                                <CardContent sx={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
                                <img
                                src={pokemon.sprites.other['dream_world'].front_default}
                                alt={`Pokemon ${pokemon.name}`}
                                width={'100px'}
                                height={'100px'}
                                />
                                
                                    <Typography variant='h6'>{pokemon.name}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
            <Pagination
                style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
                count={Math.ceil(pokeDex.length / itemsPerPage)}
                page={page}
                onChange={(event, value) => setPage(value)}
            />
        </>
    );
}

export default Pokedex; 
