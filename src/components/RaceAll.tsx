import { FaPlay } from 'react-icons/fa';
import Button from './Button';
import { useCarContext } from '../contexts/CarContext';
import { SCREEN_BOUNDARIES } from '../utils/constants';
import { useQueryClient } from '@tanstack/react-query';
import { driveModeEngine } from '../api/apiEngine';
import useAddOrUpdateWinner from '../hooks/useWinners/useAddOrUpdateWinner';
import WinnerModal from './WinnerModal';
import { useState } from 'react';

interface CarsProps {
  id: number;
  name: string;
  color: string;
}

interface Velocity {
  distance: number;
  velocity: number;
}

interface SuccessStatus {
  success: boolean;
}

interface Winner {
  name: string | null;
  id: number | null;
  time: number | null;
}

function identifyWinner(
  cars: CarsProps[] | undefined,
  velocities: Velocity[],
  successStatus: SuccessStatus[]
): Winner | null {
  const newWinner = cars?.reduce(
    (acc, car, index) => {
      const duration =
        velocities[index]?.distance / velocities[index]?.velocity / 1000;
      if (successStatus[index] && (!acc.time || duration < acc.time)) {
        acc.name = car.name;
        acc.time = duration;
        acc.id = car.id;
      }
      return acc;
    },
    { name: null, id: null, time: null } as Winner
  );
  return newWinner || null;
}

function RaceAll({ cars }: { cars?: CarsProps[] }) {
  const queryClient = useQueryClient();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newWinner, setNewWinner] = useState<Winner | null>(null);
  const { state, dispatch } = useCarContext();
  const handleCreateOrUpdate = useAddOrUpdateWinner();
  async function raceAll() {
    if (!cars) return;
    dispatch({ type: 'setRaceAll', payload: true });
    dispatch({
      type: 'setGlobalPosition',
      payload: window.innerWidth - SCREEN_BOUNDARIES,
    });
    const velocities = cars.map(car =>
      queryClient.getQueryData(['carData', car.id])
    ) as Velocity[];
    const successStatus = await Promise.all(
      cars.map(async car => (await driveModeEngine(car.id)).success)
    );
    const newWinner = identifyWinner(cars, velocities, successStatus);
    if (newWinner) handleCreateOrUpdate(newWinner);
    setNewWinner(newWinner);
    setIsOpenModal(true);
  }
  return (
    <>
      <Button
        color="emerald"
        text="Race"
        func={raceAll}
        disabled={!!state.globalPosition}
      >
        <FaPlay />
      </Button>
      {isOpenModal && newWinner && (
        <WinnerModal onClose={() => setIsOpenModal(false)} winner={newWinner} />
      )}
    </>
  );
}

export default RaceAll;
