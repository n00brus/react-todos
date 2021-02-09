import React from "react";
import PropTypes from "prop-types";
import Todoitem from "./Todoitem";
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function Todolist(props) {
  // console.log(props);
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <Todoitem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}
Todolist.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default Todolist;
