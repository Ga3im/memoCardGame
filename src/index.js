import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { EasyModeProvider, LeaderBoardProvider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LeaderBoardProvider>
      <EasyModeProvider>
        <RouterProvider router={router}></RouterProvider>
      </EasyModeProvider>
    </LeaderBoardProvider>
  </React.StrictMode>
);
