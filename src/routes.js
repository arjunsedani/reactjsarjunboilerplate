import React from "react";
import { Redirect } from "react-router-dom";
import Login from "./routes/Login/index";
import Page1 from "./routes/Portal/index";


const routes = [
  {
    path: "/",
    exact: true,
    component: Login
  },

  {
    path: "/loginsuccess",
    exact: true,
    component: () => <Redirect to="/clinicdashboard" />
  },
  {
    path: "/error401",
    exact: true,
    component: Page1
  },
  {
    route: "*",
    component: Page1,
    routes: [
      {
        path: "/loginsuccess",
        exact: true,
        component: () => Page1
      },
    
    ]
  }
];

export default routes;
