import { FaPlay } from 'react-icons/fa';
import Button from './Button';
import { useQueryClient } from '@tanstack/react-query';
import { useCarContext } from '../contexts/CarContext';
import { SCREEN_BOUNDARIES } from '../utils/constants';

interface Cars {
  isLoading?: boolean;
  cars: CarsProps[] | undefined;
}
interface CarsProps {
  id: number;
  name: string;
  color: string;
}

function RaceAll({ cars }: Cars) {
  const queryClient = useQueryClient();
  const { state, dispatch } = useCarContext();

  function raceAll(cars: CarsProps[] | undefined) {
    // cars?.forEach(element => {
    //   queryClient.invalidateQueries({ queryKey: ['carData', element.id] });
    // });
    dispatch({ type: 'setRaceAll', payload: true });
    dispatch({
      type: 'setGlobalPosition',
      payload: window.innerWidth - SCREEN_BOUNDARIES,
    });
  }

  return (
    <Button
      color="emerald"
      text="Race"
      func={() => raceAll(cars)}
      disabled={!!state.globalPosition}
    >
      <FaPlay />
    </Button>
  );
}

export default RaceAll;
