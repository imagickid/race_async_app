import { ReactNode, useEffect, useState } from 'react';
import { SCREEN_BOUNDARIES } from '../utils/constants';
import Button from './Button';
import { startStopEngine } from '../api/apiEngine';
import { useQuery } from '@tanstack/react-query';

interface CarProps {
  id: string;
  children?: ReactNode;
}

function Car({ id, children }: CarProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [startStopEngineStatus, setStartStopEngineStatus] =
    useState<string>('stopped');
  const { data } = useQuery({
    queryKey: ['carData', id],
    queryFn: () => startStopEngine({ id, status: 'started' }),
    refetchOnMount: false,
  });
  console.log(data);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleStartEngine = () => setStartStopEngineStatus('started');
  const handleStopEngine = () => setStartStopEngineStatus('stopped');
  const started = startStopEngineStatus === 'started';
  const duration = data?.distance / data?.velocity;
  return (
    <>
      <div className="flex flex-col gap-2 w-7">
        <Button color="yellow" text="A" func={handleStartEngine} />
        <Button color="rose" text="B" func={handleStopEngine} />
      </div>
      <div
        className="flex items-center mx-4"
        style={{
          position: 'relative',
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
