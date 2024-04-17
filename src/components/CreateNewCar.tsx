import { useCreateCar } from '../hooks/useCar/useCreatCar';
import Input from './Input';

function CreateNewCar() {
  const { createNewCar } = useCreateCar();

  function handleCreateNewCar(carName: string, carColor: string) {
    if (!carName) return;
    createNewCar({ name: carName, color: carColor });
  }
  return <Input text="Create" func={handleCreateNewCar} />;
}

export default CreateNewCar;
