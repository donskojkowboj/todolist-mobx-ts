import React from 'react';
import {observableTodoStore} from "./store/TodoStore";
import {TodoList} from "./TodoList";

function App() {
  return (
    <div className="App">
        <TodoList store={observableTodoStore}/>
    </div>
  );
}

export default App;
