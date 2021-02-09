import React, { useContext } from "react";
import "./modal.css";
import PropTypes from "prop-types";
import Context from "..//../context";
function Modal({ onCreate, modalstate }) {
  const [state, setState] = React.useState(false);

  // console.log(props.modalstate);
  // function submitHandler(event) {
  //   console.log(event);
  // }
  // const { modalwindow } = useContext(Context);
  function submitHandler() {
    setState(false);

    onCreate();
  }
  function submitHandler1() {
    setState(false);

    // onCreate();
  }
  return (
    <React.Fragment>
      <button onClick={() => setState(true)}>&#10006; </button>
      {state && (
        <div className='modal'>
          <div className='modal-body'>
            <h1> Title</h1>
            <p>I am modal</p>
            <button
              // onClick={() => {
              //   // setState(false);
              // }}
              onClick={submitHandler}
            >
              YEs
            </button>
            <button
              // onClick={() => {
              //   // setState(false);
              // }}
              onClick={submitHandler1}
            >
              No
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

Modal.propTypes = {
  // onChange: PropTypes.func.isRequired,
};
export default Modal;
