import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'

ReactDOM.render(
    <React.StrictMode>
        <FixedGlobalStyle />
        <ThemeProvider>
            <ThemedGlobalStyle />
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
