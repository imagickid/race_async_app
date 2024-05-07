import { FaPlay } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import Button from "./Button";
import { useCarContext } from "../contexts/CarContext";
import WinnerModal from "./WinnerModal";
import { RaceAllProps } from "../types/types";
import { driveModeEngine, startStopEngine } from "../api/apiEngine";
import { SCREEN_BOUNDARIES } from "../utils/constants";

function RaceAll({ cars }: RaceAllProps) {
  const { state, dispatch, winner } = useCarContext();
  const queryClient = useQueryClient();
  const { updatePosition } = useCarContext();
  const raceAll = () => {
    if (!cars) return;
    dispatch({ type: "setRaceAll", payload: true });
    cars.forEach(async (car) => {
      updatePosition(car.id, window.innerWidth - SCREEN_BOUNDARIES);
      const data = await startStopEngine({ id: car.id, status: "started" });
      const duration = data.distance / data.velocity;
      queryClient.setQueryData(["carData", car.id], duration);
      const status = await driveModeEngine(car.id);
      queryClient.setQueryData(["drive", car.id], status);
    });
    dispatch({ type: "setIsOpenModal", payload: true });
  };

  return (
    <>
      <Button color="emerald" func={raceAll} disabled={state.raceAll}>
        Race <FaPlay />
      </Button>
      {state.isOpenModal && winner && (
        <WinnerModal
          onClose={() => dispatch({ type: "setIsOpenModal", payload: false })}
          winner={winner}
        />
      )}
    </>
  );
}

export default RaceAll;
