import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
   <React.StrictMode>
      <BrowserRouter basename="/tech-task">
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
);
