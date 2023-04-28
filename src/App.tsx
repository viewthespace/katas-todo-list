import './App.css';
import { TODOList } from './TODOList';
import { FormEvent, useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState<string[]>([]);

  function handleAddNewItem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <div>
      <h1 className="" data-testid="introductory-message">
        Hello, World
      </h1>

      <form onSubmit={handleAddNewItem}>
        <input
          className="border-solid border-2 border-black"
          type="text"
          name="todo-input"
          data-testid="todo-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <TODOList todoItems={items} />
    </div>
  );
}

export default App;
