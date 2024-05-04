import useCreateCar from "../hooks/useCar/useCreateCar";
import Input from "./Input";

function CreateNewCar() {
  const { createNewCar } = useCreateCar();

  const handleCreateNewCar = (carName: string, carColor: string) => {
    if (!carName) return;
    createNewCar({ name: carName, color: carColor });
  };
  return <Input text="Create" func={handleCreateNewCar} />;
}

export default CreateNewCar;
