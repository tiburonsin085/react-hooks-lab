import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PokemonList from './Component/PokemonList'
import Pokemon from './Component/Pokemon'



export default (
    <Switch>
        <Route exact path = '/' component= {PokemonList} />
        <Route path = '/pokemon/:name' component = {Pokemon} />
    </Switch>
)