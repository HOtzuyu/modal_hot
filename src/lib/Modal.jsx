import React from "react";
import "./Modal.css";

export const Modale = ({
  title,
  cross,
  text,
  button,
  showModal,
  hideModal,
}) => {
  return (
    showModal && (
      <>
        <div className="modal">
          <div className="modal__header">
            <h5 className="modal__header--title">{title}</h5>
            <button
              className="modal__header--button modal__button"
              onClick={hideModal}
            >
              {cross}
            </button>
          </div>
          <p className="modal__text">{text}</p>
          <button
            className="modal__button modal__close"
            onClick={hideModal}
          >
            {button}
          </button>
        </div>
      </>
    )
  );
};
