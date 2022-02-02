import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from "./Kodiri";
import App from "./App";
import reportWebVitals from './reportWebVitals';

function Car(props) {
  return <li>{props.model}</li>
}

function Garage() {
  const cars = [
    {id:1, brand: 'Ford'},
    {id:2, brand: 'LandRover'},
    {id:3, brand: 'Fiat'},
    {id:4, brand: 'Reanulat'},
  ]
  return(
    <div>
     {cars.map(car => {
       return <li key={car.id}>{car.brand}</li>
     })} 
    </div>
  )
}

ReactDOM.render(
  <Garage/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
if(module.hot) {
  module.hot.accept();
}