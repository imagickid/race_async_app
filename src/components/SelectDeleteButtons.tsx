import { useSearchParams } from 'react-router-dom';
import Button from './Button';
import { useDeleteCar } from '../hooks/useDeleteCar';

interface SelectDeleteButtonsProps {
  carId: number;
}

function SelectDeleteButtons({ carId }: SelectDeleteButtonsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { deleteCar } = useDeleteCar();

  function handleSelect(id: string) {
    searchParams.set('carId', id);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col gap-2 w-13">
      <Button
        color="cyan"
        text="Select"
        func={() => handleSelect(carId.toString())}
      />
      <Button
        color="pink"
        text="Delete"
        func={() => deleteCar(carId.toString())}
      />
    </div>
  );
}

export default SelectDeleteButtons;
