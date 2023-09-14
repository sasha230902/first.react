import {  RouterProvider } from 'react-router-dom';

import {RestCountriesRouter} from "../router/Router"

import './App.css';

export function App() {
  return (
    <div className="App">
      <RouterProvider router={RestCountriesRouter}/>
    </div>
  );
}
