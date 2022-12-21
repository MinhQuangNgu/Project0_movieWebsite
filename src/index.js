import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './redux/store';
import {Provider} from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));
//axios.defaults.baseURL = 'http://localhost:5001';
axios.defaults.baseURL = "https://kasugaweb.herokuapp.com";
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

