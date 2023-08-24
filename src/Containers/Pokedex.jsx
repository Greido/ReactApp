import React, { useState } from 'react';
import { Grid,
        Card,
        CardContent,
        Typography,
        Pagination }
        from '@mui/material';

function Pokedex() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Número de tarjetas por página
    const totalItems = 27;  // Total de tarjetas en la pokedex (ejemplo)

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Aquí deberías tener una lista de datos de tus tarjetas
    // por ejemplo: const pokemonData = [...];

    const displayedPokemon = pokemonData.slice(startIndex, endIndex);

    return (
        <>
            <Grid container spacing={2}>
                {displayedPokemon.map((pokemon, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{pokemon.name}</Typography>
                                {/* Otros datos del pokemon */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={Math.ceil(totalItems / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />
        </>
    );
}

export default Pokedex;
