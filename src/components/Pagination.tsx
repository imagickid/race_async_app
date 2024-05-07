import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import Button from "./Button";

interface PaginationProps {
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
}

function Pagination({ prevPage, nextPage, currentPage }: PaginationProps) {
  return (
    <div className="mt-3 flex gap-3 justify-end">
      <Button color="pink" func={prevPage}>
        <HiChevronLeft /> Previous
      </Button>
      <div className="flex justify-center text-yellow-500 w-6">
        {currentPage}
      </div>
      <Button color="cyan" func={nextPage}>
        Next <HiChevronRight />
      </Button>
    </div>
  );
}

export default Pagination;
