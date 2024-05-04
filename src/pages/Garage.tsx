import CarButtonsAndProps from "../components/CarButtonsAndProps";
import ControlPanel from "../components/ControlPanel";
import Pagination from "../components/Pagination";
import useGetCars from "../hooks/useCar/useGetCars";
import { PAGE_SIZE_CAR } from "../utils/constants";

function Garage() {
  const { isLoading, cars, totalCount } = useGetCars();
  if (isLoading) return null;

  return (
    <div className="flex flex-col gap-2 m-2 px-10">
      <ControlPanel cars={cars} />
      <CarButtonsAndProps isLoading={isLoading} cars={cars} />
      <div className="flex justify-between">
        <div className="flex items-center text-cyan-300 mt-3 font-bold text-xs lg:text-base">
          GARAGE ({totalCount})
        </div>
        <Pagination count={Number(totalCount)} pageSize={PAGE_SIZE_CAR} />
      </div>
    </div>
  );
}

export default Garage;
