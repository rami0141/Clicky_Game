import React from 'react'; // react library
import ReactDOM from 'react-dom'; // use it to render your app
import './index.css';
import App from './App'; // app component
import registerServiceWorker from './registerServiceWorker'; // let the app load faster

// const greeting = React.createElement('h1', {}, 'Hello World')
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
