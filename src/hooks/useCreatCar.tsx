import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCar } from '../api/apiCars';

export function useCreateCar() {
  const queryClient = useQueryClient();

  const { mutate: createNewCar } = useMutation({
    mutationFn: createCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['garage'] });
    },
  });
  return { createNewCar };
}
