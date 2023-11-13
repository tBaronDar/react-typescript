class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = Math.random().toString();
    this.text = todoText;
  }
}

export type todoContextObj = {
  items: Todo[];
  onRemove: (id: string) => void;
  onAdd: (todoText: string) => void;
};

export default Todo;
