import GenerateHundredCars from './GenerateHundredCars';
import CreateNewCar from './CreateNewCar';
import UpdateCar from './UpdateCar';
import RaceAll from './RaceAll';
import ResetAll from './ResetAll';

interface Cars {
  isLoading?: boolean;
  cars: CarsProps[] | undefined;
}
interface CarsProps {
  id: number;
  name: string;
  color: string;
}

function ControlPanel({ cars }: Cars) {
  return (
    <div className="mx-3 flex justify-between">
      <div className="flex gap-2">
        <RaceAll cars={cars} />
        <ResetAll cars={cars} />
      </div>
      <CreateNewCar />
      <UpdateCar />
      <GenerateHundredCars />
    </div>
  );
}

export default ControlPanel;
