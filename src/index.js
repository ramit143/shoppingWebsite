import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { ShopperIndexComponent } from './components/shoper-inndex/shoper-index';
import { ShopperJewelery } from './components/shopper-jewelery/shopper-jewelery';
import { CookiesProvider } from 'react-cookie';
import { MaterialComponent } from './components/material-components/material-components';
import { EffectComponent } from './components/effects-component/effects-component';
import { ParentToChildDataThroughProps } from './components/parentToChildDataThroughProps/parentToChildDataTransfer';
import { ParentToChildDataWithUseEffect } from './components/parentToChildDataThroughProps/parentToChildDataWithUseEffect';
import { UseContextDemo } from './components/useContextDemo/useContextDemo';
import { ReducerDemo } from './components/Reducer-Demo/reducer-demo';
import {UseReducerComponent} from './components/Reducer-Demo/useReducer'
import { LikesCounter } from './components/likes-counter/like-counter.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
           <ShopperIndexComponent />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
