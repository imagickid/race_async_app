import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useCarContext } from "../../contexts/CarContext";
import { startStopEngine } from "../../api/apiEngine";
import { SCREEN_BOUNDARIES } from "../../utils/constants";

type EngineStatus = {
  success: boolean;
};

function useCarState({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const { state, getPosition, updatePosition } = useCarContext();
  const { data: duration } = useQuery({ queryKey: ["carData", id] });
  const { data: engineStatus }: { data?: EngineStatus } = useQuery({
    queryKey: ["drive", id],
  });
  const [drive, setDrive] = useState<boolean>(false);
  const position = getPosition(id);
  const positionStyle = {
    transform: `translateX(${duration ? position : 0}px)`,
    transition: `transform ${state.raceAll || drive ? duration : 0}ms linear`,
  };

  const handleRace = async () => {
    setDrive(true);
    updatePosition(id, window.innerWidth - SCREEN_BOUNDARIES);
    const data = await startStopEngine({ id, status: "started" });
    const time = data.distance / data.velocity;
    queryClient.setQueryData(["carData", id], time);
  };

  const handleReset = () => {
    queryClient.removeQueries({ queryKey: ["carData", id] });
    setDrive(false);
    updatePosition(id, 0);
  };

  return {
    duration,
    engineStatus,
    positionStyle,
    setDrive,
    position,
    handleRace,
    handleReset,
  };
}

export default useCarState;
