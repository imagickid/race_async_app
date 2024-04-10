import { FaPlay } from 'react-icons/fa';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import Button from './Button';
import Input from './Input';

function ControlPanel() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Button color="emerald" text="Race" func={() => console.log('Race')}>
          <FaPlay />
        </Button>
        <Button color="pink" text="Reset" func={() => console.log('Reset')}>
          <HiArrowUturnLeft />
        </Button>
      </div>
      <Input text="Create" />
      <Input text="Update" />
      <Button
        text="Generate cars"
        color="pink"
        func={() => console.log('100 cars')}
      />
    </div>
  );
}

export default ControlPanel;
