import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pokemon from './Pokemon'
import axios from 'axios'

function PokemonList(props) {
    
    const [list, setList] = useState([])
    const [imgUrlSprite, setImgUrlSprite] = useState([])
    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then( ( res ) => {
            
        
            const mappedListNames = res.data.results.map( (e) => e.name) 
            setList(mappedListNames)
            } )

    

    },[])

    const mappedPokemons = list.map( (e,i) => {
        return ( 
            <Link to = {`/pokemon/${e}`} key = {i}>
                
                <h3 key = {i} >{e}</h3>
            </Link> )
    })
   

    

    return (
        
        <div>
            <h3>Pokemon List</h3>
            {/* {console.log(list)} */}
            {mappedPokemons}
        </div>
    );
}

export default PokemonList;