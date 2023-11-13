import Todo from "../models/todo";

import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  clickHandler: () => void;
}> = (props) => {
  return (
    <li className={styles.item} onClick={props.clickHandler}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;
