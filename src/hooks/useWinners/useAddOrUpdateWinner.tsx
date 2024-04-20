import { createWinner, updateWinner } from "../../api/apiWinners";
import useGetWinners from "./useGetWinners";

interface Winner {
  wins: number;
  time: number;
  id: number;
}

interface NewWinner {
  id: number | null;
  time: number | null;
}

function useAddOrUpdateWinner() {
  const { winners } = useGetWinners();

  function handleCreateOrUpdate(newWinner: NewWinner) {
    const winnerToUpdate = winners.find(
      (winner: Winner) => winner.id === newWinner.id
    );

    if (winnerToUpdate && newWinner.time) {
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
        id: newWinner.id || 0,
        wins: 1,
        time: newWinner.time || 0,
      });
    }
  }
  return handleCreateOrUpdate;
}

export default useAddOrUpdateWinner;
