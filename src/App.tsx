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
    <div className="w-full">
      <div className="container max-w-lg mx-auto border p-4">
        <form onSubmit={handleAddNewItem} className="flex row-auto">
          <input
            className=" rounded-lg rounded-r-none h-8 px-4 border-solid border border-black grow"
            type="text"
            name="todo-input"
            data-testid="todo-input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            className="rounded-lg rounded-l-none border-black border px-4 h-8 border-l-0"
            type="submit"
          >
            Add
          </button>
        </form>
        <TODOList todoItems={items} />
      </div>
    </div>
  );
}

export default App;
