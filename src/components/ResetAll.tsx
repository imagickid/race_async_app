import { useQueryClient } from "@tanstack/react-query";
import { HiArrowUturnLeft } from "react-icons/hi2";
import Button from "./Button";
import { useCarContext } from "../contexts/CarContext";

interface Cars {
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

  function resetAll(carsArray: CarsProps[] | undefined) {
    carsArray?.forEach((element) => {
      queryClient.invalidateQueries({ queryKey: ["carData", element.id] });
    });
    dispatch({ type: "setRaceAll", payload: false });
  }

  return (
    <Button color="pink" text="Reset" func={() => resetAll(cars)}>
      <HiArrowUturnLeft />
    </Button>
  );
}

export default ResetAll;
