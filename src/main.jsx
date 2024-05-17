import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './styles/global.css'


import App from './App.jsx'
import Home from './components/pages/Home.jsx';
import Timer from './components/pages/Timer.jsx';
import Search from './components/pages/Search.jsx';
import Results from './components/pages/Results.jsx';
import GetOut from './components/pages/GetOut.jsx';

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/timer",
                element: <Timer />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/results",
                element: <Results />,
            },
            {
                path: "/get-out",
                element: <GetOut />,
            },
            // {
            //   path: "/results/search/:input",
            //   element: <Results />,
            // },
            {
              path: "/results/:type/:input",
              element: <Results />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
