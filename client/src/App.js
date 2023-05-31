import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import {useState} from "react";

function App() {
    const [buttonRight, setButtonRight] = useState(true)
    const [buttonLeft, setButtonLeft] = useState(true)

    const handlebuttonRightClick = () => {
        setButtonRight(!buttonRight);
    };
    const handlebuttonLeftClick = () => {
        setButtonLeft(!buttonLeft);
    };

    return (
        <div>
            <NavBar handlebuttonRightClick={handlebuttonRightClick} handlebuttonLeftClick={handlebuttonLeftClick}/>
            <AppRouter buttonLeft={buttonLeft} buttonRight={buttonRight} />
        </div>
    );
}

export default App;
