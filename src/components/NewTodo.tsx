import { useRef, useContext } from "react";

import { TodosContext } from "../store/context";

import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onAdd } = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputTodoText = inputRef.current!.value;

    if (inputTodoText.trim().length === 0) {
      alert("Ponos");
    }

    onAdd(inputTodoText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text:</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add new todo</button>
    </form>
  );
};

export default NewTodo;
