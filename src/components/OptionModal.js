import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.selectedOptionHandle}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title"> Selected Option </h3>

    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}

    <button onClick={props.selectedOptionHandle} className="button">
      {" "}
      Okay{" "}
    </button>
  </Modal>
);

// go in Indecision app
export default OptionModal;
