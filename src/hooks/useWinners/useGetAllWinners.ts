import { useQuery } from "@tanstack/react-query";
import { getAllWinners } from "../../api/apiWinners";

function useGetAllWinners() {
  const { isFetching, data: allWinners } = useQuery({
    queryKey: ["allWinners"],
    queryFn: () => getAllWinners(),
  });
  return { isFetching, allWinners };
}

export default useGetAllWinners;
