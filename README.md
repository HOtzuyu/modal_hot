# simple-component-libraryA library of React components created using `create-react-app`.

## InstallationRun the following command:`npm install modal_lib-ho`

## How to use ?

**1 - Import the pluggin :**

`import { Modale } from "ho-modal"`

**2 - Use this state :**

`const [ displayModal, setDisplayModal ] = useState(false)`

**3 - Return the modal :**

```
<Modale
    title={ modalTitle }
    text={ modalText }
    cross={ modalCloseButton }
    button={ modalCloseButtonText }
    showModal={ displayModal }
    hideModal={() => setDisplayModal(false)}
/>
```

## Give it your own style !

Customize the style with the CSS class name.

modal : custom the general modal

modal\_\_header : include title and button cross

modal\_\_header--title : title of the modal

modal\_\_header--button : cross button

modal\_\_text : text of the modal

modal\_\_close : button close

modal\_\_button : all buttons

The names use all lowercase letters with dashes for separation if you want use Sass

## Exemple of personal stylisation with css

Custom the style :

```
.modal {
    z-index: 1001;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
}

.modal__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal__header--title {
    font-weight: bold;
    font-size: 2rem;
}

.modal__header--button {
    font-weight: bold;
    font-size: 1.2rem;

}

.modal__text {
    font-weight: 700;
    font-size: 1.2rem;
}

.modal__close{
    font-weight: bold;
    font-size: 0.8rem;
}

/* reset buttons */
.modal__button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}
```
