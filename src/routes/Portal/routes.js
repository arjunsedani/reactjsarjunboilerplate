import Module1 from "./Module1";

const routes = [
  {
    path: "/listingpage",
    exact: true,
    feature: "Module1",
    Permissions: ["Read"],
    component: Module1
  },
  {
    path: "/module1",
    exact: true,
    feature: "Module1",
    Permissions: ["Read"],
    component: Module1
  }
];

export default routes;
