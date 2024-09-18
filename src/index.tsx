import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import HernioImageGallery from "./deployments/spain/09-14-2024_hernio/09-14-2024_hernio_image-gallery";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/notion-widgets",
    element: <App/>
  },
  {
    path: "/notion-widgets/deployments/spain/09-14-2024_hernio_image-gallery",
    element: <HernioImageGallery/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();