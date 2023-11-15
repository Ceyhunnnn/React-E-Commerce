const { lazy } = require("react");

const MainLayout = lazy(() => import("./layouts/MainLayout"));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <p>deneme</p>,
      },
    ],
  },
];

export default routes;
