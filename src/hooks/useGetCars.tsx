import { useQuery } from '@tanstack/react-query';
import { getCars } from '../api/apiCars.js';
import { useSearchParams } from 'react-router-dom';

export function useGetCars() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get('_page')
    ? 1
    : Number(searchParams.get('_page'));

  const {
    isLoading,
    data: { data: cars, totalCount } = {},
    error,
  } = useQuery({
    queryKey: ['garage', page],
    queryFn: () => getCars(page),
  });
  return { isLoading, cars, totalCount, error };
}
