import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useDetailAnime from "../hooks/useDetailAnime";
import Loading from "../templates/loading/Loading";
import Detail from "../templates/detail/Detail";
import { ToastContainer, toast, Bounce } from "react-toastify";

const DetailPages = () => {
  const { id } = useParams();
  const errorShownRef = useRef(false);
  const { dataSet, loadingAnime, error } = useDetailAnime(id);

  useEffect(() => {
    if (error) {
      if (!errorShownRef.current) {
        toast.error("Terjadi Error, silahkan reload", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        errorShownRef.current = true;
      }
    }
  }, [error]);

  return (
    <>
      {loadingAnime ? (
        <Loading />
      ) : (
        <>
          {dataSet && <Detail data={dataSet} />}
          <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
        </>
      )}
    </>
  );
};

export default DetailPages;
