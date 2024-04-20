import { createWinner, updateWinner } from '../../api/apiWinners';
import useGetWinners from './useGetWinners';

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
    const winnerToUpdaate = winners.find(
      (winner: Winner) => winner.id === newWinner.id
    );

    if (winnerToUpdaate) {
      updateWinner({
        id: winnerToUpdaate.id,
        data: { wins: winnerToUpdaate.wins + 1, time: newWinner.time || 0 },
      });
    }
    if (!winnerToUpdaate) {
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
