import Button from "./Button";

interface StartStopButtonsProps {
  buttonStatus?: boolean;
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
      <Button color="yellow" func={() => handleStart()} disabled={buttonStatus}>
        A
      </Button>
      <Button color="rose" func={() => handleStop()} disabled={!buttonStatus}>
        B
      </Button>
    </div>
  );
}

StartStopButtons.defaultProps = {
  buttonStatus: null,
};

export default StartStopButtons;
