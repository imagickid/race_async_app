import { FaPlay } from 'react-icons/fa';
import Button from './Button';
import useStartEngineAll from '../hooks/useStartEngineAll';

interface Cars {
  isLoading?: boolean;
  cars: CarsProps[] | undefined;
  setRaceAll: (started: string) => void;
}
interface CarsProps {
  id: number;
  name: string;
  color: string;
}

function RaceAll({ cars, setRaceAll }: Cars) {
  const { startEngineAll, isEngineOnAll } = useStartEngineAll();

  function startRaceAll() {
    cars?.map((car: CarsProps) =>
      startEngineAll({ id: car.id.toString(), status: 'started' })
    );
    setRaceAll('started');
  }
  return (
    <Button
      color="emerald"
      text="Race"
      func={startRaceAll}
      disabled={isEngineOnAll}
    >
      <FaPlay />
    </Button>
  );
}

export default RaceAll;
