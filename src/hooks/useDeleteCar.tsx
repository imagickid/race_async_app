import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCar as deleteCarApi } from '../api/apiCars';
import toast from 'react-hot-toast';

export function useDeleteCar() {
  const queryClient = useQueryClient();

  const { mutate: deleteCar } = useMutation({
    mutationFn: deleteCarApi,
    onSuccess: () => {
      toast.success('Car successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['garage'],
      });
    },
    onError: err => toast.error(err.message),
  });

  return { deleteCar };
}
