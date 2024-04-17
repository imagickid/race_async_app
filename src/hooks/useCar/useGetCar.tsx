import { useQuery } from '@tanstack/react-query';
import { getAllCars } from '../../api/apiCars';

function useGetAllCars() {
  const { isLoading, data: cars } = useQuery({
    queryKey: ['allCars'],
    queryFn: getAllCars,
  });
  return { isLoading, cars };
}

export default useGetAllCars;
