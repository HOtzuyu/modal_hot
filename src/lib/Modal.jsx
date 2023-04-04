import React from "react";
import "./Modal.css";

/**
 * @description the library component modal full screen personalisable
 * @param { string } title : on the top of the modal
 * @param { string } cross : what in the button to close modal
 * @param { string } text : message ofthe modal
 * @param { string } button : text in the close button
 * @param { boolean } showModal
 * @param { function setDisplayModal(boolean) } hideModal
 * @returns a modal
 */
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
            <button
              className="modal__header--button modal__button"
              onClick={hideModal}
            >
              {cross}
            </button>
            <h5 className="modal__header--title">{title}</h5>
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
