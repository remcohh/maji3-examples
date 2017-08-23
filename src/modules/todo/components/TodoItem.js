import { h } from "preact";
import styles from "./TodoItem.scss";

const TodoItem = ({ item, onComplete, onReset }) => {
  const checkTodo = () => {
    item.done ? onReset(item) : onComplete(item);
  };
  return (
    <li class={item.done && styles.strike}>
      <a href="#" onClick={checkTodo}>{item.name}</a>
    </li>
  );
};

export default TodoItem;
