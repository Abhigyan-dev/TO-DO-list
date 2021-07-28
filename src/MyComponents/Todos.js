import React from 'react'
import { TodoItems } from './TodoItems'

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3" >Todos List</h3>

            {props.list.length === 0 ? "All tasks completed" :
                props.list.map((i) => {
                    return (
                        <TodoItems todo={i} key={i.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
