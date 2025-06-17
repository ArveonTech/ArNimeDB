import { ToastContainer, toast, Bounce } from "react-toastify";
import Card from "../templates/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { hapusData } from "../../redux/createSlice";
import Footer from "../templates/footer/Footer";

const FavoritePages = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const showSuccessToast = (message = "Anime successfully removed.") => {
    toast.success(message, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleClick = (e) => {
    dispatch(hapusData(e));
    showSuccessToast();
  };

  return (
    <div className="mt-10">
      <h1 className="text-3xl text-center text-white">Bookmark</h1>
      <div className="px-4 mt-10 flex gap-10 justify-center flex-wrap mb-40">
        {data && data.length > 0 ? data.map((item, i) => <Card data={item} key={i} handleClick={handleClick} />) : <div className="text-white text-xl">Not Found</div>}
      </div>
      <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
    </div>
  );
};

export default FavoritePages;
