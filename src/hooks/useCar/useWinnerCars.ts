import { CarsProps } from "../../types/types";
import useGetWinners from "../useWinners/useGetWinners";
import useGetAllCars from "./useGetCar";

interface WinnerProps {
  id: number;
  wins: number;
  time: number;
}

function useWinnerCars() {
  const { isFetching: isGettingWinners, winners } = useGetWinners();
  const { isFetching: isGettingCars, cars } = useGetAllCars();

  if (isGettingWinners || isGettingCars) return null;

  const filteredCarsData = winners.map((winner: WinnerProps) =>
    cars.find((car: CarsProps) => car.id === winner.id)
  );
  const combinedData = winners.map((winner: WinnerProps, index: number) => {
    return { ...winner, ...filteredCarsData[index] };
  });

  return combinedData;
}

export default useWinnerCars;
