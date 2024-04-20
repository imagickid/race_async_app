import { useQuery } from "@tanstack/react-query";
import { getWinners } from "../../api/apiWinners";
import { useCarContext } from "../../contexts/CarContext";

function useGetWinners() {
  const { state } = useCarContext();
  const page = state.currentPageWinners;
  const { order } = state;
  const { sort } = state;

  const { isFetching, data: { data: winners = [], totalCount } = {} } =
    useQuery({
      queryKey: ["winners", page, sort, order],
      queryFn: () => getWinners(page, sort, order),
    });
  return { isFetching, winners, totalCount };
}

export default useGetWinners;
