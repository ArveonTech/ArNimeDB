const Search = ({ handleSearch }) => {
  return (
    <form className="w-full mx-auto mt-10 px-4 md:w-full">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img src="/icons/explore.png" alt="search" className="w-5 h-5" />
        </div>
        <input
          type="text"
          id="default-search"
          className="block w-full p-4 ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search anime"
          required
          onInput={(e) => handleSearch(e)}
        />
      </div>
    </form>
  );
};

export default Search;
