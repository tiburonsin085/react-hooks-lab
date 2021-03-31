import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'



function Pokemon(props) {

    const [url, setUrl] = useState([])

    useEffect ( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
            .then((res) =>{
                setUrl(res.data.sprites.front_default)
            })
    } , [] )


    return (
        <div>
            <h1>{props.match.params.name}</h1>
            <img src = {`${url}`} />
            {console.log(url)}
        </div>
    );
}

export default Pokemon;