import { ReactNode, useEffect, useRef } from "react";
import StartStopButtons from "../StartStopButtons";
import { useCarContext } from "../../contexts/CarContext";
import { identifyCurrentPlace } from "../../utils/helpers";
import useCarState from "./useCarState";
import { MILLI_SEC } from "../../utils/constants";

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
      winnerIs({ id, name, time: duration / MILLI_SEC });
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
