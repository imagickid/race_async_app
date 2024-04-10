import { FaPlay } from 'react-icons/fa';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import Button from './Button';
import Input from './Input';
import { createHundredCarObjects } from '../utils/helpers';
import { CAR_BRANDS, CAR_MODELS } from '../utils/constants';
import { useCreateCar } from '../hooks/useCreatCar';

function ControlPanel() {
  const { createNewCar } = useCreateCar();

  function handeleCreateHundredCars() {
    createHundredCarObjects(CAR_BRANDS, CAR_MODELS).map(car =>
      createNewCar(car)
    );
  }

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
        func={handeleCreateHundredCars}
      />
    </div>
  );
}

export default ControlPanel;
