import { useQueryClient } from "@tanstack/react-query";
import { HiArrowUturnLeft } from "react-icons/hi2";
import Button from "./Button";
import { useCarContext } from "../contexts/CarContext";
import { RaceAllProps } from "../types/types";

function ResetAll({ cars }: RaceAllProps) {
  const queryClient = useQueryClient();
  const { dispatch, updatePosition, winnerIs } = useCarContext();

  function resetAll() {
    cars?.forEach((car) => {
      queryClient.removeQueries({ queryKey: ["carData", car.id] });
      queryClient.removeQueries({ queryKey: ["drive", car.id] });
      updatePosition(car.id, 0);
    });
    winnerIs(null);
    dispatch({ type: "setRaceAll", payload: false });
    dispatch({ type: "setIsOpenModal", payload: false });
  }

  return (
    <Button color="pink" func={() => resetAll()}>
      Reset <HiArrowUturnLeft />
    </Button>
  );
}

export default ResetAll;
