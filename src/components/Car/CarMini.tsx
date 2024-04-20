import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { startStopEngine } from "../../api/apiEngine";
import { SCREEN_BOUNDARIES } from "../../utils/constants";

function useCarMini({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const { data, isFetching } = useQuery({
    queryKey: ["carData", id],
    queryFn: () => startStopEngine({ id, status: "started" }),
    refetchOnMount: false,
  });
  const [position, setPosition] = useState<number>(0);
  const [drive, setDrive] = useState<boolean>(false);
  const [engineWorks, setEngineWorks] = useState<boolean>(true);
  const duration = (data?.distance ?? 0) / (data?.velocity ?? 1);
  const trackWidth = window.innerWidth;

  function handleStart() {
    setDrive(true);
    setPosition(trackWidth - SCREEN_BOUNDARIES);
  }

  function handleReset() {
    setPosition(0);
    setDrive(false);
    queryClient.invalidateQueries({ queryKey: ["carData", id] });
  }

  return {
    duration,
    trackWidth,
    position,
    setPosition,
    drive,
    engineWorks,
    setEngineWorks,
    setDrive,
    handleReset,
    handleStart,
    isFetching,
  };
}

export default useCarMini;
