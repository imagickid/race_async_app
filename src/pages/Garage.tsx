import CarButtons from '../components/CarButtons';
import ControlPanel from '../components/ControlPanel';
import Pagination from '../components/Pagination';
import { useGetCars } from '../hooks/useGetCars';

function Garage() {
  const { isLoading, cars, totalCount } = useGetCars();
  return (
    <div className="flex flex-col gap-2 m-2 px-10">
      <ControlPanel />
      <CarButtons isLoading={isLoading} cars={cars} />
      <Pagination count={Number(totalCount)} />
    </div>
  );
}

export default Garage;
