import React from 'react'

export const TodoItems = (props) => {

    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.description}</p>
            <button className="btn btn-danger" onClick={() => props.onDelete(props.todo)}>Remove</button>
            <hr />
        </div>
    )
}

/*  Another way to input :
export const TodoItems = ({todo}) => {

    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
        </div>
    )
}*/

