require('./src/styles/styles.css');
require('prismjs/themes/prism-tomorrow.css');
require('katex/dist/katex.min.css');

exports.onClientEntry = () => {
    // Load Roboto font to support Material Design
    const pathRoboto =
        'https://fonts.googleapis.com/css?family=Roboto:300,500,700';
    const linkRoboto = document.createElement('link');
    linkRoboto.setAttribute('rel', 'stylesheet');
    linkRoboto.setAttribute('href', pathRoboto);
    document.head.appendChild(linkRoboto);

    // Load Open Sans font to support Material Design
    const pathOpenSans =
        'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800';
    const linkOpenSans = document.createElement('link');
    linkOpenSans.setAttribute('rel', 'stylesheet');
    linkOpenSans.setAttribute('href', pathOpenSans);
    document.head.appendChild(linkOpenSans);

    // Load Material Icons
    const pathIcons = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    const linkIcons = document.createElement('link');
    linkIcons.setAttribute('rel', 'stylesheet');
    linkIcons.setAttribute('href', pathIcons);
    document.head.appendChild(linkIcons);
};
