/** Import dependent CSS stylesheets */
import './styles/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeRoot } from './Theming/ThemeRoot';

const appendStyles = () => {
    /** Preload Open Sans font to support Material Design */
    const pathOpenSans = 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap';
    const loadOpenSans = document.createElement('link');
    const linkOpenSans = document.createElement('link');
    loadOpenSans.setAttribute('rel', 'preload');
    loadOpenSans.setAttribute('as', 'style');
    linkOpenSans.setAttribute('rel', 'stylesheet');
    loadOpenSans.setAttribute('href', pathOpenSans);
    linkOpenSans.setAttribute('href', pathOpenSans);
    document.head.appendChild(loadOpenSans);
    document.head.appendChild(linkOpenSans);

    /** Preload Material icons */
    const pathIcons = 'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap';
    const loadIcons = document.createElement('link');
    const linkIcons = document.createElement('link');
    loadIcons.setAttribute('rel', 'preload');
    loadIcons.setAttribute('as', 'style');
    linkIcons.setAttribute('rel', 'stylesheet');
    loadIcons.setAttribute('href', pathIcons);
    linkIcons.setAttribute('href', pathIcons);
    document.head.appendChild(loadIcons);
    document.head.appendChild(linkIcons);
};

const initApp = () => {
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement!);

    root.render(
        <StrictMode>
            <ThemeRoot>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeRoot>
        </StrictMode>
    );
};

appendStyles();
initApp();
reportWebVitals();
