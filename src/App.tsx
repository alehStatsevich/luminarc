import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routes from "./common/Routes";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default App;
