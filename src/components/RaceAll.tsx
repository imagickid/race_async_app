import { FaPlay } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Button from "./Button";
import { useCarContext } from "../contexts/CarContext";
import { driveModeEngine } from "../api/apiEngine";
import useAddOrUpdateWinner from "../hooks/useWinners/useAddOrUpdateWinner";
import WinnerModal from "./WinnerModal";

interface CarsProps {
  id: number;
  name: string;
  color: string;
}

interface Velocity {
  distance: number;
  velocity: number;
}

interface SuccessStatus {
  success: boolean;
}

interface Winner {
  name: string | null;
  id: number | null;
  time: number | null;
}

function identifyWinner(
  cars: CarsProps[] | undefined,
  velocities: Velocity[],
  successStatus: SuccessStatus[]
): Winner | null {
  const newWinner = cars?.reduce(
    (acc, car, index) => {
      const duration =
        (velocities[index]?.distance ?? 0) /
        (velocities[index]?.velocity ?? 0) /
        1000;
      if (successStatus[index] && (!acc.time || duration < acc.time)) {
        acc.name = car.name;
        acc.time = duration;
        acc.id = car.id;
      }
      return acc;
    },
    { name: null, id: null, time: null } as Winner
  );
  return newWinner || null;
}

function RaceAll({ cars }: { cars: CarsProps[] }) {
  const queryClient = useQueryClient();
  const [newWinner, setNewWinner] = useState<Winner | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { dispatch } = useCarContext();
  const handleCreateOrUpdate = useAddOrUpdateWinner();
  const raceAll = async () => {
    if (!cars) return;
    dispatch({ type: "setRaceAll", payload: true });
    const velocities = cars.map((car) =>
      queryClient.getQueryData(["carData", car.id])
    ) as Velocity[];
    const successStatus = await Promise.all(
      cars.map(async (car) => (await driveModeEngine(car.id)).success)
    );
    const newWinnerIdentified = identifyWinner(cars, velocities, successStatus);
    if (newWinnerIdentified && newWinnerIdentified.id !== null) {
      handleCreateOrUpdate(newWinnerIdentified);
      setNewWinner(newWinnerIdentified);
      setIsOpenModal(true);
    }
  };
  return (
    <>
      <Button color="emerald" text="Race" func={raceAll}>
        <FaPlay />
      </Button>
      {isOpenModal && newWinner && (
        <WinnerModal onClose={() => setIsOpenModal(false)} winner={newWinner} />
      )}
    </>
  );
}

export default RaceAll;
