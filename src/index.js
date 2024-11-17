import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Pages/DetailsPage/Details.jsx";
import MyBookings from "./Pages/MyBookings/MyBookings.jsx";
import HomePage from "./Pages/HomePage/HomePage";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <Details />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA7FF",
      dark: "#1B3C74",
    },
    secondary: {
      main: "#000000",
      gray: "#77829D",
      lightGray: "#DDDDDD",
      darkGray: "#5C6169",
      alternateGray: "#ABB6C7",
      white: "#FFFFFF",
      alternateWhite: "#FAFBFE",
      alternateDarkGray: "#414146",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
