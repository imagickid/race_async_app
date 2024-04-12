import { useMutation, useQueryClient } from '@tanstack/react-query';
import { startStopEngine } from '../api/apiEngine';
import toast from 'react-hot-toast';

function useStartEngineAll() {
  const queryClient = useQueryClient();
  const { mutate: startEngineAll, isPending: isEngineOnAll } = useMutation({
    mutationFn: startStopEngine,
    onSuccess: (data, variable) => {
      queryClient.setQueryData(['carData', variable.id], data);
    },
    onError: err => toast.error(err.message),
  });
  return { startEngineAll, isEngineOnAll };
}

export default useStartEngineAll;
