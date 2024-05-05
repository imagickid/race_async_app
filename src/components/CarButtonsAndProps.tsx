import { FaCarSide } from "react-icons/fa";

import Loading from "./Loading";
import SelectDeleteButtons from "./SelectDeleteButtons";
import Car from "./Car/Car";
import StartFinishLine from "./StartFinishLine";
import { CarsProps } from "../types/types";

interface Cars {
  isLoading: boolean;
  cars: CarsProps[] | undefined;
}

function CarButtonsAndProps({ isLoading, cars }: Cars) {
  if (isLoading) return <Loading />;

  return (
    <div>
      {cars?.map((car: CarsProps) => (
        <div
          className="flex gap-2 border-b border-solid p-2 w-full"
          key={car.id}
        >
          <SelectDeleteButtons carId={car.id} />
          <Car id={car.id} name={car.name}>
            <FaCarSide
              className="text-3xl sm:text-5xl"
              style={{ color: car.color }}
            />
          </Car>
          <StartFinishLine text="Start" carColor={car.color} />
          <div className="flex items-center">
            <span className="text-base text-wrap sm:text-2xl sm:text-nowrap">
              {car.name}
            </span>
          </div>
          <div className="ml-auto">
            <StartFinishLine text="Finish" carColor={car.color} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarButtonsAndProps;
