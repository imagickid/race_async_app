import useGetWinners from "../useWinners/useGetWinners";
import useGetAllCars from "./useGetCar";

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
  const { isFetching: isGettingWinners, winners } = useGetWinners();
  const { isFetching: isGettingCars, cars } = useGetAllCars();

  if (isGettingWinners || isGettingCars) return null;

  const filteredCarsData = winners.map((winner: WinnerProps) =>
    cars.find((car: CarProps) => car.id === winner.id)
  );
  const combinedData = winners.map((winner: WinnerProps, index: number) => {
    return { ...winner, ...filteredCarsData[index] };
  });

  return combinedData;
}

export default useWinnerCars;
