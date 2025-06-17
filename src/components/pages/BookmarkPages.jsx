import Card from "../templates/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { hapusData } from "../../redux/createSlice";

const FavoritePages = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(hapusData(e));
  };

  return (
    <div className="min-h-screen mt-10">
      <h1 className="text-3xl text-center text-white">Bookmark</h1>
      <div className="px-4 mt-10 flex gap-10 justify-center flex-wrap">{data && data.length > 0 ? data.map((item, i) => <Card data={item} key={i} handleClick={handleClick} />) : <div className="text-white text-xl">Not Found</div>}</div>
    </div>
  );
};

export default FavoritePages;
