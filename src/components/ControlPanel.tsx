import { FaPlay } from 'react-icons/fa';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import Button from './Button';
import Input from './Input';
import { createHundredCarObjects } from '../utils/helpers';
import { CAR_BRANDS, CAR_MODELS } from '../utils/constants';
import { useCreateCar } from '../hooks/useCreatCar';
import { useSearchParams } from 'react-router-dom';
import useUpdateCar from '../hooks/useUpdateCar';

function ControlPanel() {
  const { createNewCar } = useCreateCar();
  const [searchParams] = useSearchParams();
  const { updateCar } = useUpdateCar();
  function handeleCreateHundredCars() {
    createHundredCarObjects(CAR_BRANDS, CAR_MODELS).map(car =>
      createNewCar(car)
    );
  }
  function handleCreateNewCar(carName: string, carColor: string) {
    if (!carName) return;
    createNewCar({ name: carName, color: carColor });
  }

  function handleUpdateCar(carName: string, carColor: string) {
    if (!carName) return;
    const carParamId = searchParams.get('carId')?.toString();
    if (!carParamId) return;
    updateCar({ id: carParamId, data: { name: carName, color: carColor } });
  }
  return (
    <div className="mx-3 flex justify-between">
      <div className="flex gap-2">
        <Button color="emerald" text="Race" func={() => console.log('Race')}>
          <FaPlay />
        </Button>
        <Button color="pink" text="Reset" func={() => console.log('Reset')}>
          <HiArrowUturnLeft />
        </Button>
      </div>
      <Input text="Create" func={handleCreateNewCar} />
      <Input text="Update" func={handleUpdateCar} />
      <Button
        text="Generate cars"
        color="pink"
        func={handeleCreateHundredCars}
      />
    </div>
  );
}

export default ControlPanel;
