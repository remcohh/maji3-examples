import { h, Component } from "preact";
import TodoList from "../components/TodoList";
import { connect } from "preact-redux";
import { addTodoItem, resetTodoItem, completeTodoItem } from "../actions";
import { itemsDone } from "../selectors";

class AddTodoItem extends Component {
  constructor() {
    super();
    this.state = { item: "" };
  }
  render({ onNewItem }) {
    const updateItem = e => {
      this.setState({ item: e.target.value });
    };
    const onAdd = () => {
      onNewItem(this.state.item);
      this.setState({ item: "" });
    };
    return (
      <span>
        <input
          type="text"
          name="newTodo"
          onInput={updateItem}
          value={this.state.item}
        />
        <button onClick={onAdd} disabled={this.state.item.trim() == ""}>
          Add
        </button>
      </span>
    );
  }
}

const TodoPage = ({
  todo,
  addTodoItem,
  completeTodoItem,
  resetTodoItem,
  amountTodo,
  amountDone
}) => {
  const onResetItem = item => resetTodoItem(item.id);
  const onCompleteItem = item => completeTodoItem(item.id);

  return (
    <div>
      <h1>Remco</h1>
      <span>Todo: {amountTodo}</span>
      <span>Done: {amountDone}</span>
      <TodoList
        todo={todo}
        onCompleteItem={onCompleteItem}
        onResetItem={onResetItem}
      />
      <AddTodoItem onNewItem={addTodoItem} />
    </div>
  );
};

const mapStateToProps = state => ({
  todo: state.todo,
  amountDone: itemsDone(state),
  amountTodo: state.todo.reduce(
    (result, item) => result + (item.done ? 0 : 1),
    0
  )
});

const mapDispatchToProps = {
  addTodoItem,
  completeTodoItem,
  resetTodoItem
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
