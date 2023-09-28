import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MentionsLegales from "./MentionsLegales/MentionsLegales";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/bdeeseo",
        element: <App />,
    },
    {
        path: "/bdeeseo/mentions-legales",
        element: <MentionsLegales />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
