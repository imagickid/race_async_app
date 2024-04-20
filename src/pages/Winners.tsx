import PaginationWinners from '../components/PaginationWinners';
import Table from '../components/Table';
import useGetWinners from '../hooks/useWinners/useGetWinners';
import { PAGE_SIZE_WINNERS } from '../utils/constants';

function Winners() {
  const { totalCount } = useGetWinners();

  return (
    <div className="m-2 px-10">
      <Table />
      <PaginationWinners
        count={Number(totalCount)}
        pageSize={PAGE_SIZE_WINNERS}
      />
    </div>
  );
}

export default Winners;
