import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import {About } from './MyComponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
}
from "react-router-dom";


export default function App() {

  const addTodo = (title, description) => {

    //console.log("Adding a new todo I am !")

    let sno;
    if (todos.length === 0)
      sno = 1;
    else
      sno = todos[todos.length - 1].sno + 1;

    const newTodo = {
      sno: sno,
      title: title,
      description: description
    }

    setTodos([...todos, newTodo]);

  }

  const onDelete = (todo_data) => {

    //console.log("Delete I will: ", todo_data.sno);

    setTodos(todos.filter((i) => {
      return i !== todo_data;
    }));
  }


  let initTodo;
  if (localStorage.getItem("todos") === null)
    initTodo = [];
  else
    initTodo = JSON.parse(localStorage.getItem("todos"));

  //updated using hooks
  const [todos, setTodos] = useState(initTodo)  //Initially empty list

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  /* we will now update the declaration of todo as this will not update the page when we delete a task
  let todo = [
    {
      sno: 1,
      title: "Return to Monke",
      description: "return to giga chad monke"
    },
    {
      sno: 2,
      title: "Return to Dog",
      description: "return to virgin doggy"
    },
    {
      sno: 3,
      title: "Return to fish",
      description: "return to stupid swimming fishes"
    }
  ] */

  return (
    <>
      <Router>
        <Header title="MyTodosList" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos list={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}


//Without react router
/* return (
    <>
      <Header title="MyTodosList" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos list={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}*/

//export default App;
