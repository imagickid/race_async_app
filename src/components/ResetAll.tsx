import Button from './Button';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import { useQueryClient } from '@tanstack/react-query';
import { useCarContext } from '../contexts/CarContext';

interface Cars {
  isLoading?: boolean;
  cars: CarsProps[] | undefined;
}
interface CarsProps {
  id: number;
  name: string;
  color: string;
}

function ResetAll({ cars }: Cars) {
  const queryClient = useQueryClient();
  const { dispatch } = useCarContext();

  function resetAll(cars: CarsProps[] | undefined) {
    cars?.forEach(element => {
      queryClient.invalidateQueries({ queryKey: ['carData', element.id] });
    });
    dispatch({ type: 'setRaceAll', payload: false });
    dispatch({ type: 'setGlobalPosition', payload: 0 });
  }

  return (
    <Button color="pink" text="Reset" func={() => resetAll(cars)}>
      <HiArrowUturnLeft />
    </Button>
  );
}

export default ResetAll;
