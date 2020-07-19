import React from 'react';
import './App.css';

import Main from './Main'

import ReactGA from 'react-ga';

function App() {
    ReactGA.initialize('UA-172945829-2');
    ReactGA.pageview('/');
    
    return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App;
