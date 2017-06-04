const React = require("react");
const ReactDOM = require("react-dom");
require('./css/index.css')

const TodoItem = require('./todoItem');


class TodoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: ["wash up", "eat something", "walk with dog"]};
    this.onDelete = this.onDelete.bind(this);
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
        <p>The busiest people have the most leisure...</p>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }

  onDelete (item) {
    let updatedTodos = this.state.todos.filter((val, index) => item !== val)
    this.setState({
      todos: updatedTodos
    })
  }

};

ReactDOM.render(<TodoComponent />, document.querySelector("#todo-wrapper"))
