import { ReactNode, useRef } from "react";
import StartStopButtons from "../StartStopButtons";
import { identifyCurrentPlace } from "../../utils/helpers";
import useCarMini from "./CarMini";

interface CarProps {
  id: number;
  children?: ReactNode;
}

function Car({ id, children }: CarProps) {
  const {
    engineWorks,
    setEngineWorks,
    position,
    setPosition,
    positionStyles,
    handleReset,
    handleStart,
  } = useCarMini({ id });
  const carRef = useRef(null);

  if (carRef.current && !engineWorks) {
    setPosition(identifyCurrentPlace(carRef.current));
    setEngineWorks(true);
  }

  return (
    <>
      <StartStopButtons
        handleStart={handleStart}
        handleStop={handleReset}
        buttonStatus={!!position}
      />
      <div
        ref={carRef}
        className="flex items-center mx-4"
        style={positionStyles}
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
