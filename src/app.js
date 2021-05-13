import React from "react";
import { hot } from 'react-hot-loader';
import "./app.css"

const App = () => {
    return(
        <div className="App"> 
            <h1> Hello React! </h1>
        </div>
    );
};

export default hot(module)(App);