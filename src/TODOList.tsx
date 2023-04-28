type Props = {
  todoItems: string[];
};

export function TODOList({ todoItems }: Props) {
  if (todoItems.length === 0) {
    return <p data-testid="todo-list">No Items</p>;
  }

  return (
    <ul data-testid="todo-list">
      {todoItems.map((todoItem, idx) => (
        <li key={idx} data-testid="todo-item">
          {todoItem}
        </li>
      ))}
    </ul>
  );
}
