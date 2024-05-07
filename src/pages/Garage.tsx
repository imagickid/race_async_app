import CarButtonsAndProps from "../components/CarButtonsAndProps";
import ControlPanel from "../components/ControlPanel";
import Pagination from "../components/Pagination";
import { useCarContext } from "../contexts/CarContext";
import useGetCars from "../hooks/useCar/useGetCars";
import { PAGE_SIZE_CAR } from "../utils/constants";

function Garage() {
  const { state, dispatch } = useCarContext();
  const { isLoading, cars, totalCount } = useGetCars();
  if (isLoading) return null;

  const count = Number(totalCount);
  const currentPage = state.currentPageCars;
  if (count === 0) return null;
  const pageCount = Math.ceil(count / PAGE_SIZE_CAR);

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
    <div className="flex flex-col gap-2 m-2 px-10">
      <ControlPanel cars={cars} />
      <CarButtonsAndProps isLoading={isLoading} cars={cars} />
      <div className="flex justify-between">
        <div className="flex items-center text-cyan-300 mt-3 font-bold text-xs lg:text-base">
          GARAGE ({totalCount})
        </div>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Garage;
