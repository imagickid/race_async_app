import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useCarContext } from "../contexts/CarContext";

import Button from "./Button";

interface PaginationProps {
  count: number;
  pageSize: number;
}

function Pagination({ count, pageSize }: PaginationProps) {
  const { state, dispatch } = useCarContext();
  const currentPage = state.currentPageCars;
  if (count === 0) return null;
  const pageCount = Math.ceil(count / pageSize);

  const nextPage = () => {
    const next: number =
      currentPage === pageCount ? currentPage : currentPage + 1;
    dispatch({ type: "setCarsPage", payload: next });
  };

  const prevPage = () => {
    const prev: number = currentPage === 1 ? currentPage : currentPage - 1;
    dispatch({ type: "setCarsPage", payload: prev });
  };
  return (
    <div className="mt-3 flex gap-3 justify-end">
      <Button text="Previous" color="pink" func={prevPage}>
        <HiChevronLeft />
      </Button>
      <div className="flex justify-center text-yellow-500 w-6">
        {currentPage}
      </div>
      <Button text="Next" color="cyan" func={nextPage}>
        <HiChevronRight />
      </Button>
    </div>
  );
}

export default Pagination;
