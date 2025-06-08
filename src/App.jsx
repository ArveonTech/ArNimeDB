import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/MainLayout";
import HomePages from "./components/pages/HomePages";
import ExplorePages from "./components/pages/Explore";
import TopAnimePages from "./components/pages/TopAnimePages";
import GenresPages from "./components/pages/Genres";
import NotFoundPages from "./components/pages/NotFoundPages"

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
    path: "/topAnime",
    element: (
      <Layout>
        <TopAnimePages />
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
    path: "*",
    element: <NotFoundPages />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
