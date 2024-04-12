import { useMutation, useQueryClient } from '@tanstack/react-query';
import { startStopEngine } from '../api/apiEngine';
import toast from 'react-hot-toast';

function useStartEngine(id: string) {
  const queryClient = useQueryClient();

  const { mutate: startEngine, isPending: isEngineOn } = useMutation({
    mutationFn: startStopEngine,
    onSuccess: data => queryClient.setQueryData(['carData', id], data),
    onError: err => toast.error(err.message),
  });
  return { startEngine, isEngineOn };
}

export default useStartEngine;
