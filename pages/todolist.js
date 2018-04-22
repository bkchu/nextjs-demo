import { Component } from "react";
import Link from "next/link";
import Nav from "../components/nav";

const ItemLink = props => (
  <div>
    <Link as={`/td/${props.id}`} href={`/tododetail?id=${props.name}`}>
      <a>{props.name}</a>
    </Link>
  </div>
);

class TodoList extends Component {
  state = {
    text: "",
    allTodos: []
  };

  onSubmitHandler = e => {
    e.preventDefault();
    if (this.state.text) {
      let copy = this.state.allTodos.slice();
      copy.push(this.state.text);
      this.setState({
        allTodos: copy,
        text: ""
      });
    }
  };

  render() {
    let { allTodos, text } = this.state;
    let todoDisplay = allTodos.map(todo => {
      return (
        <div>
          <ItemLink id={`${todo}-nextjs`} name={todo}>
            {todo}
          </ItemLink>
        </div>
      );
    });
    return (
      <div>
        <Nav />
        <form onSubmit={this.onSubmitHandler}>
          <input
            value={text}
            onChange={e => this.setState({ text: e.target.value })}
            type="text"
          />
        </form>
        {todoDisplay}
      </div>
    );
  }
}

export default TodoList;
