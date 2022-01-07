import { StrictMode } from "react";
import ReactDOM from "react-dom";



import "../styles/index.css";
import StoreItemsList from "./Components/StoreItemsList";


ReactDOM.render(
    <StrictMode>
        <StoreItemsList />
    </StrictMode>,
    document.querySelector("header#store")
);
