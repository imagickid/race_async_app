import { createWinner, updateWinner } from "../../api/apiWinners";
import useGetAllWinners from "./useGetAllWinners";

interface Winner {
  wins: number;
  time: number;
  id: number;
}

type NewWinner = {
  id: number;
  time: number;
};

function useAddOrUpdateWinner() {
  const { allWinners, isFetching } = useGetAllWinners();

  function handleCreateOrUpdate(newWinner: NewWinner | null) {
    const winnerToUpdate = allWinners.find(
      (winner: Winner) => winner.id === newWinner?.id
    );
    if (winnerToUpdate && newWinner?.time) {
      updateWinner({
        id: winnerToUpdate.id,
        data: {
          wins: winnerToUpdate.wins + 1,
          time:
            newWinner.time < winnerToUpdate.time
              ? newWinner.time
              : winnerToUpdate.time || 0,
        },
      });
    }
    if (!winnerToUpdate) {
      createWinner({
        id: newWinner?.id || 0,
        wins: 1,
        time: newWinner?.time || 0,
      });
    }
  }

  return { handleCreateOrUpdate, isFetching };
}

export default useAddOrUpdateWinner;
