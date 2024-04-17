import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWinner as deleteWinnerApi } from '../../api/apiWinners';

export function useDeleteWinner() {
  const queryClient = useQueryClient();

  const { mutate: deleteWinner } = useMutation({
    mutationFn: deleteWinnerApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['winners'],
      });
    },
    onError: err => console.error(err.message),
  });

  return { deleteWinner };
}
