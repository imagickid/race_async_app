import Button from './Button';
import { FaCarSide } from 'react-icons/fa';
import Loading from './Loading';
import { useGetCars } from '../hooks/useGetCars';

interface CarsProps {
  id: number;
  name: string;
  color: string;
}

function Car() {
  const { isLoading, cars } = useGetCars();
  if (isLoading) return <Loading />;

  return (
    <>
      {cars.map((car: CarsProps) => (
        <div className="flex gap-2 border border-solid p-2" key={car.id}>
          <div className="flex flex-col gap-3 w-13">
            <Button color="cyan" text="Select" />
            <Button color="pink" text="Delete" />
          </div>
          <div className="flex flex-col gap-3 w-7">
            <Button color="yellow" text="A" />
            <Button color="rose" text="B" />
          </div>
          <div className="flex items-center mx-4">
            <FaCarSide className=" text-pink-300 text-5xl" />
          </div>
          <div className="flex items-center">
            <span className="text-2xl">{car.name}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Car;
