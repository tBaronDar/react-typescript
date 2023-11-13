import React, { useState } from "react";
import Todo, { todoContextObj } from "../models/todo";

export const TodosContext = React.createContext<todoContextObj>({
  items: [],
  onRemove: (id: string) => {},
  onAdd: (text: string) => {},
});

////

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todosArray, setTodosArray] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodosArray((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodosArray((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };

  const contextValue: todoContextObj = {
    items: todosArray,
    onRemove: removeTodoHandler,
    onAdd: addTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
