import React from "react";
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import '../assets/css/fonts.css';

import Home from './Home';
import Team from './Team';
import { RedirectPathToHomeOnly } from './Home/redirects'

function App() {

    function resizeListener() {
        document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);
    }
    // Listening the resize event
    window.addEventListener('resize', resizeListener);
    resizeListener()

    return (
        <>
            <Header />
            <Switch>
                <Route exact strict path="/" component={Home} />
                <Route exact strict path="/team" component={Team} />
                <Route component={RedirectPathToHomeOnly} />
            </Switch>
        </>
    );
}

export default App;
