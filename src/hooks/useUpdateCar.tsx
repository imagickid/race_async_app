import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCar as updateCarApi } from '../api/apiCars';
import toast from 'react-hot-toast';

interface mutationDataProps {
  id: string;
  data: {
    name: string;
    color: string;
  };
}

export function useUpdateCar() {
  const queryClient = useQueryClient();

  const { mutate: updateCar } = useMutation({
    mutationFn: ({ id, data }: mutationDataProps) => updateCarApi({ id, data }),
    onSuccess: () => {
      toast.success('Car succesfully updated');
      queryClient.invalidateQueries({ queryKey: ['garage'] });
    },
    onError: err => toast.error(err.message),
  });
  return { updateCar };
}

export default useUpdateCar;
