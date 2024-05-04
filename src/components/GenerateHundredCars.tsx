import useCreateCar from "../hooks/useCar/useCreateCar";
import { CAR_BRANDS, CAR_MODELS } from "../utils/constants";
import { createHundredCarObjects } from "../utils/helpers";
import Button from "./Button";

function GenerateHundredCars() {
  const { createNewCar } = useCreateCar();
  const handeleCreateHundredCars = () => {
    createHundredCarObjects(CAR_BRANDS, CAR_MODELS).map((car) =>
      createNewCar(car)
    );
  };
  return (
    <div className="w-28">
      <Button
        text="Generate cars"
        color="pink"
        func={handeleCreateHundredCars}
      />
    </div>
  );
}

export default GenerateHundredCars;
