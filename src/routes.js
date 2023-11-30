import PathConstants from "./PathConstants";

const { lazy } = require("react");

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const AccountPage = lazy(() => import("./pages/AccountPage/AccountPage"));
const CategoryProductPage = lazy(() =>
  import("./pages/CategoryProductPage/CategoryProductPage")
);
const ShopBasketPage = lazy(() =>
  import("./pages/ShopBasketPage/ShopBasketPage")
);
const ProductDetailPage = lazy(() =>
  import("./pages/ProductDetailPage/ProductDetailPage")
);
const PrivateLayout = lazy(() =>
  import("./layouts/PrivateLayout/PrivateLayout")
);
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
        element: <PrivateLayout element={<SignupPage />} />,
      },
      {
        path: PathConstants.ACCOUNT,
        element: <AccountPage />,
      },
      {
        path: PathConstants.ERROR,
        element: <ErrorPage />,
      },
      {
        path: PathConstants.CATEGORY_PRODUCT_PAGE + "/:id",
        element: <CategoryProductPage />,
      },
      {
        path: PathConstants.SHOP_BASKET,
        element: <ShopBasketPage />,
      },
      {
        path: PathConstants.PRODUCT_DETAIL,
        element: <ProductDetailPage />,
      },
    ],
  },
];

export default routes;
