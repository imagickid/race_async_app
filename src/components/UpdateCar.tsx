import { useSearchParams } from "react-router-dom";
import Input from "./Input";
import { useUpdateCar } from "../hooks/useCar/useUpdateCar";

function UpdateCar() {
  const [searchParams] = useSearchParams();
  const { updateCar } = useUpdateCar();

  const handleUpdateCar = (carName: string, carColor: string) => {
    if (!carName) return;
    const carParamId = searchParams.get("carId")?.toString();
    if (!carParamId) return;
    updateCar({ id: carParamId, data: { name: carName, color: carColor } });
  };
  return <Input text="Update" func={handleUpdateCar} />;
}

export default UpdateCar;
