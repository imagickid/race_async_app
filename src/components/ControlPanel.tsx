import GenerateHundredCars from "./GenerateHundredCars";
import CreateNewCar from "./CreateNewCar";
import UpdateCar from "./UpdateCar";
import RaceAll from "./RaceAll";
import ResetAll from "./ResetAll";
import { CarsProps } from "../types/types";

interface Cars {
  cars: CarsProps[] | undefined;
}

function ControlPanel({ cars }: Cars) {
  return (
    <div className="flex flex-col px-2 gap-2 place-items-center lg:flex lg:flex-row lg:justify-between">
      <div className="flex gap-2">
        <RaceAll cars={cars} />
        <ResetAll cars={cars} />
      </div>
      <CreateNewCar />
      <UpdateCar />
      <GenerateHundredCars />
    </div>
  );
}

export default ControlPanel;
