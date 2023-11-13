import React, { useContext } from "react";

import styles from "./Todos.module.css";

import { TodosContext } from "../store/context";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const { items, onRemove } = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          clickHandler={onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
