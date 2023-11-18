const { lazy } = require("react");

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Home = lazy(() => import("./pages/home"));
const SignUp = lazy(() => import("./pages/signup"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
