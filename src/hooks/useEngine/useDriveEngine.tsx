import { useMutation, useQueryClient } from '@tanstack/react-query';
import { driveModeEngine } from '../../api/apiEngine';
import toast from 'react-hot-toast';

function useDriveEngine() {
  const queryClient = useQueryClient();

  const {
    data,
    mutate: driveEngine,
    isPending: isDriving,
    error: isEngineFailure,
  } = useMutation({
    mutationFn: driveModeEngine,
    onSuccess: (data, id) => queryClient.setQueryData(['drive', id], data),
    onError: err => {
      console.log(err);
      toast.error(err.message);
    },
    onSettled: (data, err) => {
      console.log(data, err, 'onsettled');
    },
  });
  return { data, driveEngine, isDriving, isEngineFailure };
}

export default useDriveEngine;
