import React, { useState,useEffect } from 'react';
import { Grid,
        Card,
        CardContent,
        Typography,
        Pagination }
        from '@mui/material';

import { useSelector,useDispatch } from 'react-redux';
import {getPokes} from '../store/actions/pokeActions';

function Pokedex() {

    const[currentPage,setCurrentPage]=useState(1);
    const itemsPerPage = 9;

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getPokes())
    },[dispatch])


    const pokeDex = useSelector((state) => state.pokeReducer.pokedex);

    const handlePageChange = (event,page)=>{
        setCurrentPage(page)
    };

    const startIndex = (currentPage-1)*itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayPokemon = pokeDex.slice(startIndex, endIndex);


    return (
        <>
            <Grid container spacing={2}>
                {displayPokemon.map((pokemon,index)=>{
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant='h6'>{pokemon.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                })}
            </Grid>
            <Pagination
                style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />
        </>
    );
}

export default Pokedex; 
