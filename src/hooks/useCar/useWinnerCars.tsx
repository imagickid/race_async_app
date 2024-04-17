import useGetWinners from '../useWinners/useGetWinners';
import useGetAllCars from './useGetCar';

interface WinnerProps {
  id: number;
  wins: number;
  time: number;
}

interface CarProps {
  id: number;
  name: string;
  color: string;
}

function useWinnerCars() {
  const { isLoading: isGettingWinners, winners } = useGetWinners();
  const { isLoading: isGettingCars, cars } = useGetAllCars();

  if (isGettingWinners || isGettingCars) return;

  const filteredCarsData = winners.map((winner: WinnerProps) =>
    cars.find((car: CarProps) => car.id === winner.id)
  );
  const combinedData = winners.map((winner: WinnerProps, index: number) => {
    return { ...winner, ...filteredCarsData[index] };
  });

  return combinedData;
}

export default useWinnerCars;
