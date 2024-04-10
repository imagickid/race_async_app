import { useQuery } from '@tanstack/react-query';
import { getCars } from '../api/apiCars.js';

export function useGetCars() {
  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    queryKey: ['garage'],
    queryFn: getCars,
  });
  return { isLoading, cars, error };
}
