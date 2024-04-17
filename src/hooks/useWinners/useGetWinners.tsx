import { useQuery } from '@tanstack/react-query';
import { getWinners } from '../../api/apiWinners';
import { useCarContext } from '../../contexts/CarContext';

function useGetWinners() {
  const { state } = useCarContext();
  const page = state.currentPageWinners;

  const { isLoading, data: { data: winners = [], totalCount } = {} } = useQuery(
    {
      queryKey: ['winners', page],
      queryFn: () => getWinners(page),
    }
  );
  return { isLoading, winners, totalCount };
}

export default useGetWinners;
