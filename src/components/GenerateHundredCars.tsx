import useCreateCar from "../hooks/useCar/useCreatCar";
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
    <Button text="Generate cars" color="pink" func={handeleCreateHundredCars} />
  );
}

export default GenerateHundredCars;
