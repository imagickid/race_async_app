import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { useCarContext } from "../contexts/CarContext";
import useGetWinners from "../hooks/useWinners/useGetWinners";
import { PAGE_SIZE_WINNERS } from "../utils/constants";

function Winners() {
  const { state, dispatch } = useCarContext();
  const { totalCount } = useGetWinners();

  const count = Number(totalCount);
  const currentPage = state.currentPageWinners;
  if (count === 0) return null;
  const pageCount = Math.ceil(count / PAGE_SIZE_WINNERS);

  const nextPage = () => {
    const next: number =
      currentPage === pageCount ? currentPage : currentPage + 1;
    dispatch({ type: "setWinnersPage", payload: next });
  };

  const prevPage = () => {
    const prev: number = currentPage === 1 ? currentPage : currentPage - 1;
    dispatch({ type: "setWinnersPage", payload: prev });
  };

  return (
    <div className="m-2 px-10">
      <Table />
      <div className="flex items-center text-cyan-300 mt-3 font-bold">
        WINNERS ({totalCount})
      </div>
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Winners;
