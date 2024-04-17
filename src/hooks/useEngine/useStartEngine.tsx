import { useMutation, useQueryClient } from '@tanstack/react-query';
import { startStopEngine } from '../../api/apiEngine';
import toast from 'react-hot-toast';

function useStartEngine() {
  const queryClient = useQueryClient();

  const {
    data,
    mutate: startEngine,
    isPending: isTurningOn,
  } = useMutation({
    mutationFn: startStopEngine,
    onSuccess: (data, variables) =>
      queryClient.setQueryData(['carData', variables.id], data),
    onError: err => toast.error(err.message),
  });
  return { data, startEngine, isTurningOn };
}

export default useStartEngine;
