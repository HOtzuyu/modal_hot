import { useState } from "react";
import Modale from "../lib";

export const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <button onClick={() => setDisplayModal(true)}>Show Modal</button>
      <Modale
        title="Titre"
        text="Le texte"
        cross="X"
        button="close"
        showModal={displayModal}
        hideModal={() => setDisplayModal(false)}
      />
    </>
  );
};
