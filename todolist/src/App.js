import {useState} from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function App() {
  const [todo, setTodo] = useState([]);

  const onAddItem = (inputValue) => {
    const newItem = {
      id: Math.random().toString(36).substr(2,9),
      task: inputValue,
      complete: false
    }
    setTodo([...todo, newItem])
  }

  const onRemoveItem = (id) => {
    setTodo([...todo.filter((item) => item.id !== id)])
  }

  const onToggleItem = (id) => {
    setTodo([
      ...todo.map((item) => 
      item.id === id ? {...item, complete: !item.complete} : {...item}
      )
    ])
  }

  return (
    <div className="App">
      <header>
        <h1>Список: {todo.length}</h1>
      </header>
      <TodoForm onAddItem={onAddItem}/>
      {todo.map((todo) => {
        return (
          <TodoItem 
          key={todo.id}
          todo={todo}
          onRemoveItem={onRemoveItem}
          onToggleItem={onToggleItem}
          />
        )
      })}
    </div>
  );
}

export default App;
