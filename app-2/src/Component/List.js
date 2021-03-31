import React from 'react';

function List(props) {
    const showCharacters = props.char.map(e =>{
        return (<h1>{e}</h1>)
    })
    return (
        <div>
           {showCharacters}
        </div>
    );
}

export default List;