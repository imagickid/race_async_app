import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCar } from '../../api/apiCars';
import toast from 'react-hot-toast';

export function useCreateCar() {
  const queryClient = useQueryClient();

  const { mutate: createNewCar } = useMutation({
    mutationFn: createCar,
    onSuccess: () => {
      toast.success('Car successfully created');
      queryClient.invalidateQueries({ queryKey: ['garage'] });
    },
  });
  return { createNewCar };
}
