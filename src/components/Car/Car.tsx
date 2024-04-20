import { ReactNode, useRef } from "react";
import StartStopButtons from "../StartStopButtons";
import { identifyCurrentPlace } from "../../utils/helpers";
import { useCarContext } from "../../contexts/CarContext";
import useCarMini from "./CarMini";
import { SCREEN_BOUNDARIES } from "../../utils/constants";

interface CarProps {
  id: number;
  children?: ReactNode;
}

function Car({ id, children }: CarProps) {
  const {
    setPosition,
    setEngineWorks,
    handleStart,
    handleReset,
    engineWorks,
    position,
    duration,
    drive,
    isFetching,
  } = useCarMini({ id });
  const carRef = useRef(null);
  const { state } = useCarContext();
  function handleStop() {
    if (carRef.current) setPosition(identifyCurrentPlace(carRef.current));
    setEngineWorks(false);
  }
  return (
    <>
      <StartStopButtons
        handleStart={handleStart}
        handleStop={handleReset}
        buttonStatus={!!position || isFetching}
      />
      <div
        ref={carRef}
        className="flex items-center mx-4"
        style={{
          transform: state.raceAll
            ? `translateX(${window.innerWidth - SCREEN_BOUNDARIES}px)`
            : `translateX(${position}px)`,
          transition: state.raceAll
            ? `transform ${duration}ms linear`
            : `transform ${drive ? duration : 0}ms linear`,
        }}
      >
        {children}
      </div>
      <button type="button" onClick={handleStop}>STOP</button>
    </>
  );
}

Car.defaultProps = {
  children: null,
};

export default Car;
