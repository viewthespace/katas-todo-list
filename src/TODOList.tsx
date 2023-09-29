type Props = {
  todoItems: string[];
};

export function TODOList({ todoItems }: Props) {
  if (todoItems.length === 0) {
    return <p data-testid="todo-list">No Items</p>;
  }

  return (
    <ul data-testid="todo-list" className="mt-2 divide-y border divide-black border-black rounded-md">
      {todoItems.map((todoItem, idx) => (
        <li key={idx} data-testid="todo-item" className="px-4 h-8 flex items-center justify-start">
          {todoItem}
        </li>
      ))}
    </ul>
  );
}
