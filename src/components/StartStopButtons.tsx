import Button from './Button';

interface StartStopButtonsProps {
  buttonStatus: boolean;
  handleStart: () => void;
  handleStop: () => void;
}

function StartStopButtons({
  buttonStatus,
  handleStart,
  handleStop,
}: StartStopButtonsProps) {
  return (
    <div className="flex flex-col gap-2 w-7">
      <Button
        color="yellow"
        text="A"
        func={() => handleStart()}
        disabled={buttonStatus}
      />
      <Button
        color="rose"
        text="B"
        func={() => handleStop()}
        disabled={!buttonStatus}
      />
    </div>
  );
}

export default StartStopButtons;
