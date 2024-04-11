import { startStopEngine } from '../api/apiEngine';
import Button from './Button';

interface startStopButtonsProps {
  id: string;
}

function StartStopButtons({ id }: startStopButtonsProps) {
  return (
    <>
      <Button
        color="yellow"
        text="A"
        func={() => startStopEngine({ id, status: 'started' })}
      />
      <Button
        color="rose"
        text="B"
        func={() => startStopEngine({ id, status: 'stopped' })}
      />
    </>
  );
}

export default StartStopButtons;
