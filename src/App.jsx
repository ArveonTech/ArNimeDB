import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/MainLayout";
import HomePages from "./components/pages/HomePages";
import ExplorePages from "./components/pages/ExplorePages";
import GenresPages from "./components/pages/GenresPages";
import RecommendedPages from "./components/pages/RecommendedPages";
import NotFoundPages from "./components/pages/NotFoundPages";
import DetailPages from "./components/pages/DetailPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePages />
      </Layout>
    ),
  },
  {
    path: "/explore",
    element: (
      <Layout>
        <ExplorePages />
      </Layout>
    ),
  },
  {
    path: "/recommended",
    element: (
      <Layout>
        <RecommendedPages />
      </Layout>
    ),
  },
  {
    path: "/genres",
    element: (
      <Layout>
        <GenresPages />
      </Layout>
    ),
  },
  {
    path: "/detail/:id",
    element: <DetailPages />,
  },
  {
    path: "*",
    element: <NotFoundPages />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
