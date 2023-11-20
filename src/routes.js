import PathConstants from "./PathConstants";

const { lazy } = require("react");

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

const routes = [
  {
    path: PathConstants.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PathConstants.ABOUT,
        element: <AboutPage />,
      },
      {
        path: PathConstants.CONTACT,
        element: <ContactPage />,
      },
      {
        path: PathConstants.SINGUP,
        element: <SignupPage />,
      },
      {
        path: PathConstants.ERROR,
        element: <ErrorPage />,
      },
    ],
  },
];

export default routes;
