import React from 'react';

function List(props) {
    console.log(props)
    return (
        <div>
            {props.todos.map((e,i)=> {
                return <h1 key = {i}>{e}</h1>
            })}
        </div>
    );
}

export default List;