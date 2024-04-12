import { HiArrowUturnLeft } from 'react-icons/hi2';
import Button from './Button';
import GenerateHundredCars from './GenerateHundredCars';
import CreateNewCar from './CreateNewCar';
import UpdateCar from './UpdateCar';
import RaceAll from './RaceAll';

interface Cars {
  isLoading?: boolean;
  cars: CarsProps[] | undefined;
  setRaceAll: (setRaceAll: string) => void;
}
interface CarsProps {
  id: number;
  name: string;
  color: string;
}

function ControlPanel({ cars, setRaceAll }: Cars) {
  return (
    <div className="mx-3 flex justify-between">
      <div className="flex gap-2">
        <RaceAll cars={cars} setRaceAll={setRaceAll} />
        <Button color="pink" text="Reset" func={() => setRaceAll('stopped')}>
          <HiArrowUturnLeft />
        </Button>
      </div>
      <CreateNewCar />
      <UpdateCar />
      <GenerateHundredCars />
    </div>
  );
}

export default ControlPanel;
