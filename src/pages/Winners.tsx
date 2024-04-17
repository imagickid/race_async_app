import PaginationWinners from '../components/PaginationWinners';
import Table from '../components/Table';
import { useCreateWinner } from '../hooks/useWinners/useCreateWinner';
import useGetWinners from '../hooks/useWinners/useGetWinners';
import useUpdateWinner from '../hooks/useWinners/useUpdateWinner';
import { PAGE_SIZE_WINNERS } from '../utils/constants';

function Winners() {
  const { winners, isLoading, totalCount } = useGetWinners();
  const { createWinner } = useCreateWinner();
  const { updateWinner } = useUpdateWinner();

  const newWinner = { id: 3, time: 2.0 };
  if (isLoading) return;

  function update() {
    const winnerToUpdaate = winners.find(winner => winner.id === newWinner.id);
    if (winnerToUpdaate) {
      updateWinner({
        id: winnerToUpdaate.id,
        data: { wins: winnerToUpdaate.wins + 1, time: newWinner.time },
      });
    }
    if (!winnerToUpdaate) {
      createWinner({ id: newWinner.id, wins: 1, time: newWinner.time });
    }
  }

  return (
    <div className="m-2 px-10">
      <Table />
      <button onClick={update}>Update a winner</button>
      <PaginationWinners
        count={Number(totalCount)}
        pageSize={PAGE_SIZE_WINNERS}
      />
    </div>
  );
}

export default Winners;
