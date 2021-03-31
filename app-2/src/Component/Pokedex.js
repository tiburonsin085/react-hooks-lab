import React from 'react';
import { useState, useEffect } from 'react'
import List from './List'
import axios from 'axios'

function Pokedex(props) {
    
    const [characters, setCharacters] = useState([])
    useEffect(() => {

        axios.get('https://swapi.dev/api/people/').then((res) => {
         
        const mapCharacters = res.data.results.map((elem,i)=> elem.name)
        // console.log(res.data.results[0].name)
        // console.log(mapCharacters)
        setCharacters(mapCharacters)
        })
    })


    return (
        <div>
            <List char = {characters}/>
        </div>

    )
}

export default Pokedex;