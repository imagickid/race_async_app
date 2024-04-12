import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../utils/constants';
import Button from './Button';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

interface PaginationProps {
  count: number;
}

function Pagination({ count }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('_page')
    ? 1
    : Number(searchParams.get('_page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next: number =
      currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('_page', next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev: number = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('_page', prev.toString());
    setSearchParams(searchParams);
  }
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
