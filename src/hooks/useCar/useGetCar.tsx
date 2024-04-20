import { useQuery } from '@tanstack/react-query';
import { getAllCars } from '../../api/apiCars';

function useGetAllCars() {
  const { isFetching, data: cars } = useQuery({
    queryKey: ['allCars'],
    queryFn: getAllCars,
  });
  return { isFetching, cars };
}

export default useGetAllCars;
