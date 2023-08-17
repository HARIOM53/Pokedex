import {Routes, Route } from 'react-router-dom';
import Pokedex from '../../componants/Pokedex/Pokedex'
import PokemonDetails from '../../componants/PolemonDetails/PokemonDetails'

function CustomRoutes(){

    return (
        <Routes>
            <Route path='/' element={<Pokedex />}/>
            <Route path='/pokemon/:id' element={<PokemonDetails />}/>
        </Routes>
    );
}

export default CustomRoutes;