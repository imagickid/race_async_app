import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCars } from "../../api/apiCars.js";
import { PAGE_SIZE_CAR } from "../../utils/constants.js";
import { useCarContext } from "../../contexts/CarContext.js";

function useGetCars() {
  const queryClient = useQueryClient();
  const { state } = useCarContext();
  const page = state.currentPageCars;

  const {
    isLoading,
    data: { data: cars, totalCount } = {},
    error,
  } = useQuery({
    queryKey: ["garage", page],
    queryFn: () => getCars(page),
  });

  const pageCount: number = totalCount
    ? Math.ceil(totalCount / PAGE_SIZE_CAR)
    : 1;

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["garage", page + 1],
      queryFn: () => getCars(page + 1),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["garage", page - 1],
      queryFn: () => getCars(page - 1),
    });
  return { isLoading, cars, totalCount, error };
}

export default useGetCars;
