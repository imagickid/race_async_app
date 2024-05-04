import { ReactNode, useEffect, useRef } from "react";
import StartStopButtons from "../StartStopButtons";
import { useCarContext } from "../../contexts/CarContext";
import { identifyCurrentPlace } from "../../utils/helpers";
import useCarState from "./useCarState";

interface CarProps {
  id: number;
  name: string;
  children?: ReactNode;
}

function Car({ id, name, children }: CarProps) {
  const carRef = useRef(null);
  const {
    duration,
    engineStatus,
    positionStyle,
    position,
    handleRace,
    handleReset,
  } = useCarState({ id });
  const { updatePosition, winnerIs } = useCarContext();

  useEffect(() => {
    if (engineStatus && !engineStatus.success && carRef.current)
      updatePosition(id, identifyCurrentPlace(carRef.current));
  }, [engineStatus, id, updatePosition]);

  useEffect(() => {
    if (engineStatus && engineStatus.success && typeof duration === "number")
      winnerIs({ id, name, time: duration / 1000 });
  });

  return (
    <>
      <StartStopButtons
        handleStart={handleRace}
        handleStop={handleReset}
        buttonStatus={!!position}
      />
      <div
        ref={carRef}
        className="flex items-center mx-4"
        style={positionStyle}
      >
        {children}
      </div>
    </>
  );
}

Car.defaultProps = {
  children: null,
};

export default Car;
