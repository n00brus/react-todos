import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";
import Modal from "../icons/modal/Modal";
const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginButton: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

function Todoitem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed === true) {
    classes.push("done");
  }
  function RemoveTodo() {
    console.log("removed");
    removeTodo.bind(null, todo.id)();
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type='checkbox'
          checked={todo.completed}
          style={styles.input}
          onChange={() => {
            onChange(todo.id);
          }}
        />
        {index + 1}
        &nbsp;
        {todo.title}
      </span>
      <Modal onCreate={RemoveTodo} />
    </li>
  );
}
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default Todoitem;
// removeTodo.bind(null, todo.id)
