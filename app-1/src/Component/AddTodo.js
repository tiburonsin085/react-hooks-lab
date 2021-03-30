import React, { useState } from 'react'



function AddTodo(props) {
    const [newChore , setNewChore ] = useState('')

 function sendChore (){
     const storeChore = newChore
     props.addTodo(storeChore)
     setNewChore('')
 }
    
    

    // function handleInput (element) {
    //     setNewChore = element
    // }
    return (
        <div>
            <input placeholder = 'Put a new chore '
                value ={newChore}
                onChange = {(e) => setNewChore(e.target.value)} />
            <button onClick = {sendChore}>Send{console.log(newChore)}</button>
        </div>
    );
}

export default AddTodo;
