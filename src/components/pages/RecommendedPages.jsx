import useRecommendations from "../hooks/useRecommendations";
import Footer from "../templates/footer/Footer";
import ListAnime from "../templates/listAnime/ListAnime";
import Loading from "../templates/loading/Loading";

const RecommendedPages = () => {
  const { listAnime, loadingAnime } = useRecommendations();

  return (
    <div className="min-h-screen">
      <h1 className="mt-10 text-white text-3xl text-center">Recommended by admin</h1>
      {loadingAnime ? (
        <Loading />
      ) : (
        <>
          <div className="flex mt-16 gap-10 flex-wrap justify-center">{listAnime && listAnime.length > 0 ? listAnime.map((data, i) => <ListAnime data={data} key={i} />) : <p className="text-white text-xl">Not Found</p>}</div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default RecommendedPages;
