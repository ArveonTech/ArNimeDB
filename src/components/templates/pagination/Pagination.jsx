import { useEffect } from "react";

const Pagination = ({ handleNext, handlePrev, currentPage, lastPage }) => {
  return (
    <div className="flex gap-4 justify-center mt-10">
      <img src="/icons/prev.png" alt="previous" className="w-10 h-10 cursor-pointer" onClick={() => handlePrev()} />
      <p className="text-center text-2xl text-white">
        {currentPage} <span>/ {lastPage}</span>
      </p>
      <img src="/icons/next.png" alt="previous" className="w-10 h-10 cursor-pointer" onClick={() => handleNext()} />
    </div>
  );
};

export default Pagination;
