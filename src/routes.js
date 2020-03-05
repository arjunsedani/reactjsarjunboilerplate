import React from "react";
import { Redirect } from "react-router-dom";
import Home from "routes/Portal/Home";
import Login from "routes/Login/index";
import Page1 from "routes/Portal/index";


const routes = [
  {
    path: "/",
    exact: true,
    component: Login
  },

  {
    path: "/loginsuccess",
    exact: true,
    component: () => <Redirect to="/listingpage" />
  },
  {
    path: "/error401",
    exact: true,
    component: Page1
  },
  {
    route: "*",
    component: Home,
    routes: [
      {
        path: "/loginsuccess",
        exact: true,
        component: () => Page1
      },
      {
        path: "/listingpage",
        exact: true,
        component: Page1
      },
    ]
  }
];

export default routes;
