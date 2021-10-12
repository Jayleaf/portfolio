import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tippy.js/dist/tippy.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const root = document.getElementById('root')

window.setInterval(function(){
  var height = document.getElementById('dropdown').clientHeight
  root.style.setProperty('--dropdown-height', height + "px");
}, 1);

 window.setInterval(function(){
  document.getElementById('wrapper').style.position = "absolute"
  document.getElementById('wrapper').style.top = "50%"
  document.getElementById('wrapper').style.left = "50%"
  document.getElementById('wrapper').style.transform = "translateX(-50%) translateY(-50%)"
  document.getElementById('wrapper').style.marginLeft = "-350px"
  document.getElementById('wrapper').style.marginTop = "-150px"
}, 1);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
