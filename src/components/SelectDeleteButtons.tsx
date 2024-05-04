import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import useDeleteCar from "../hooks/useCar/useDeleteCar";
import useDeleteWinner from "../hooks/useWinners/useDeleteWinner";

interface SelectDeleteButtonsProps {
  carId: number;
}

function SelectDeleteButtons({ carId }: SelectDeleteButtonsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { deleteCar } = useDeleteCar();
  const { deleteWinner } = useDeleteWinner();

  function handleSelect(id: string) {
    searchParams.set("carId", id);
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
        func={() => {
          deleteCar(carId);
          deleteWinner(carId);
          localStorage.removeItem(`${carId}_position`);
        }}
      />
    </div>
  );
}

export default SelectDeleteButtons;
