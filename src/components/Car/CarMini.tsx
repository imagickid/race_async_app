import { useState } from "react";
import { driveModeEngine, startStopEngine } from "../../api/apiEngine";
import { SCREEN_BOUNDARIES } from "../../utils/constants";
import { useCarContext } from "../../contexts/CarContext";

type VelocityDataProps = {
  distance?: number;
  velocity?: number;
};

function useCarMini({ id }: { id: number }) {
  const { state } = useCarContext();
  const [velocityData, setVelocityData] = useState<VelocityDataProps>();
  const [position, setPosition] = useState<number>(0);
  const [drive, setDrive] = useState<boolean>(false);
  const [engineWorks, setEngineWorks] = useState<boolean>(true);
  const duration =
    (velocityData?.distance ?? 0) / (velocityData?.velocity ?? 1);

  const handleStart = async () => {
    const velocity = await startStopEngine({ id, status: "started" });
    setVelocityData(velocity);
    setDrive(true);
    setPosition(window.innerWidth - SCREEN_BOUNDARIES);
    const engineStatus = await driveModeEngine(id);
    setEngineWorks(engineStatus?.success);
  };
  function handleReset() {
    setPosition(0);
    setDrive(false);
  }
  const positionStyles = {
    transform: state.raceAll
      ? `translateX(${window.innerWidth - SCREEN_BOUNDARIES}px)`
      : `translateX(${position}px)`,
    transition: state.raceAll
      ? `transform ${duration}ms linear`
      : `transform ${drive ? duration : 0}ms linear`,
  };
  return {
    positionStyles,
    position,
    setPosition,
    engineWorks,
    setEngineWorks,
    handleReset,
    handleStart,
  };
}

export default useCarMini;
