import { ReactNode, useEffect, useState } from 'react';
import { SCREEN_BOUNDARIES } from '../utils/constants';
import Button from './Button';
import { startStopEngine } from '../api/apiEngine';
import { useQuery } from '@tanstack/react-query';
import useStartEngine from '../hooks/useStartEngine';

interface CarProps {
  id: string;
  raceAll: string;
  children?: ReactNode;
}

function Car({ id, raceAll, children }: CarProps) {
  const { startEngine, isEngineOn } = useStartEngine(id.toString());
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [startStopEngineStatus, setStartStopEngineStatus] =
    useState<string>('stopped');
  const { data } = useQuery({
    queryKey: ['carData', id],
    queryFn: () => startStopEngine({ id, status: 'started' }),
    refetchOnMount: false,
  });
  function handleStartEngine() {
    startEngine({ id, status: 'started' });
    setStartStopEngineStatus('started');
  }
  function handleStopEngine() {
    startEngine({ id, status: 'stopped' });
    setStartStopEngineStatus('stopped');
  }
  const started =
    (startStopEngineStatus === 'started' && !isEngineOn) ||
    raceAll === 'started';
  const duration = data?.distance / data?.velocity;
  return (
    <>
      <div className="flex flex-col gap-2 w-7">
        <Button
          color="yellow"
          text="A"
          func={handleStartEngine}
          disabled={started}
        />
        <Button color="rose" text="B" func={handleStopEngine} />
      </div>
      <div
        className="flex items-center mx-4"
        style={{
          transform: `translateX(${
            started ? screenWidth - SCREEN_BOUNDARIES : 0
          }px)`,
          transition: `transform ${started ? duration : 0}ms linear`,
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Car;
