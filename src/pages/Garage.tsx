import { useState } from 'react';
import CarButtons from '../components/CarButtons';
import ControlPanel from '../components/ControlPanel';
import Pagination from '../components/Pagination';
import { useGetCars } from '../hooks/useGetCars';

function Garage() {
  const [raceAll, setRaceAll] = useState('stopped');
  const { isLoading, cars, totalCount } = useGetCars();
  return (
    <div className="flex flex-col gap-2 m-2 px-10">
      <ControlPanel cars={cars} setRaceAll={setRaceAll} />
      <CarButtons isLoading={isLoading} cars={cars} raceAll={raceAll} />
      <Pagination count={Number(totalCount)} />
    </div>
  );
}

export default Garage;
