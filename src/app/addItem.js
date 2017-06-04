const React = require("react");
require('./css/addItem.css');

class AddItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    return (
      <form className="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" className="todo-text-field" placeholder="Your item to do!" />
        <input type="submit" value="Add item!" className="todo-submit" />
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value)
  }
}

module.exports = AddItem;
