import { useState } from "react";

const Dropdown = ({ data, handleClick }) => {
  const [genres, setGenres] = useState([]);
  return (
    <div className="bg-slate-600 p-6 rounded-xl shadow-md space-y-4 w-80 mx-auto">
      <h2 className="text-xl font-semibold text-white">Pilih Dua Genre</h2>

      <div>
        <label htmlFor="genre1" className="block text-sm text-white mb-1">
          Genre 1
        </label>
        <select id="genre1" className="w-full border bg-slate-700 text-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">-- Select Genre 1 --</option>
          {data.data?.map((genres, i) => (
            <option value={genres.mal_id} key={i}>
              {genres.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="genre2" className="block text-sm text-white mb-1">
          Genre 2
        </label>
        <select id="genre2" className="w-full border bg-slate-700 text-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">-- Select Genre 2 --</option>
          {data.data?.map((genres, i) => (
            <option value={genres.mal_id} key={i}>
              {genres.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
        onClick={() => {
          const genre1 = document.getElementById("genre1").value;
          const genre2 = document.getElementById("genre2").value;

          const newGenres = [genre1, genre2].filter(Boolean).join(","); // biar aman

          setGenres(newGenres); // update state
          handleClick(newGenres); // langsung kirim ke callback
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Dropdown;
