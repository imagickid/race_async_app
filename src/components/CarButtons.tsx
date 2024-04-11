import { FaCarSide } from 'react-icons/fa';
import Loading from './Loading';
import SelectDeleteButtons from './SelectDeleteButtons';
import StartStopButtons from './StartStopButtons';
import Car from './Car';

interface Cars {
  isLoading: boolean;
  cars: CarsProps[] | undefined;
}
interface CarsProps {
  id: number;
  name: string;
  color: string;
}
function CarButtons({ isLoading, cars }: Cars) {
  if (isLoading) return <Loading />;

  return (
    <>
      {cars?.map((car: CarsProps) => (
        <div className="flex gap-2 border-b border-solid p-2" key={car.id}>
          <SelectDeleteButtons carId={car.id} />
          <div className="flex flex-col gap-2 w-7">
            <StartStopButtons id={car.id.toString()} />
          </div>
          <Car>
            <FaCarSide className="text-5xl" style={{ color: car.color }} />
          </Car>
          <div className="flex items-center">
            <span className="text-2xl">{car.name}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarButtons;
