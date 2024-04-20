import { ReactNode, useRef, useState } from 'react';
import StartStopButtons from './StartStopButtons';
import { startStopEngine } from '../api/apiEngine';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { SCREEN_BOUNDARIES } from '../utils/constants';
import { identifyCurrentPlace } from '../utils/helpers';
import { useCarContext } from '../contexts/CarContext';
interface CarProps {
  id: number;
  children?: ReactNode;
}

function Car({ id, children }: CarProps) {
  const queryClient = useQueryClient();
  const carRef = useRef();
  const { data, isFetching } = useQuery({
    queryKey: ['carData', id],
    queryFn: () => startStopEngine({ id, status: 'started' }),
    refetchOnMount: false,
  });
  const { state } = useCarContext();
  const [position, setPosition] = useState<number>(0);
  const [drive, setDrive] = useState(false);
  const trackWidth = window.innerWidth;
  const duration = data?.distance / data?.velocity;
  function handleStart() {
    setDrive(true);
    setPosition(trackWidth - SCREEN_BOUNDARIES);
  }
  function handleStop() {
    setPosition(identifyCurrentPlace(carRef.current));
  }

  function handleReset() {
    setPosition(0);
    setDrive(false);
    queryClient.invalidateQueries({ queryKey: ['carData', id] });
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
            ? `translateX(${state.globalPosition}px)`
            : `translateX(${position}px)`,
          transition: state.raceAll
            ? `transform ${duration}ms linear`
            : `transform ${drive ? duration : 0}ms linear`,
        }}
      >
        {children}
      </div>
      <button onClick={handleStop}>STOP</button>
    </>
  );
}

export default Car;
