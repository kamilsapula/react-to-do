const React = require("react");
const ReactDOM = require("react-dom");
require('./css/index.css')

const TodoItem = require('./todoItem');
const AddItem = require('./addItem')


class TodoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: ["wash up", "eat something", "walk with dog"]};
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  render() {

    let todos = this.state.todos
    todos = todos.map((item, index) => {
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
      )
    })

    return (
      <div id="todo-list" className="todo-list">
        <p>What do you need to do?</p>
        <ul>
          {todos}
        </ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    )
  }

  onAdd (item) {
    let updatedTodos = this.state.todos;
    updatedTodos = [...updatedTodos, item];
    this.setState({
      todos: updatedTodos
    })
  }

  onDelete (item) {
    let updatedTodos = this.state.todos.filter((val, index) => item !== val)
    this.setState({
      todos: updatedTodos
    })
  }

};

ReactDOM.render(<TodoComponent />, document.querySelector("#todo-wrapper"))
