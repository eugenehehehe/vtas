import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomApplicationDevelopment from './components/CustomApplicationDevelopment';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/custom-application-development" element={<CustomApplicationDevelopment />} />
    </Routes>
  </BrowserRouter>
);

// Measure performance in your app
reportWebVitals();




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CustomApplicationDevelopment from './components/CustomApplicationDevelopment';


// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <BrowserRouter>
// //     <App />
// //   </BrowserRouter>, document.getElementById('root')
// // );
// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route exact path="/custom-application-development" component={CustomApplicationDevelopment} />
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
    
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
