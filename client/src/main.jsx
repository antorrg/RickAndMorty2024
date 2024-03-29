import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import {AuthProvider} from './components/Auth/AuthContext/AuthContext.jsx'
import store from "./Redux/store";

import axios from "axios";


const url = import.meta.env.VITE_URL;

axios.defaults.baseURL = url;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
          <ToastContainer />
            <App />
          </BrowserRouter>
        </Provider>
        </AuthProvider>
    
  </React.StrictMode>
);
