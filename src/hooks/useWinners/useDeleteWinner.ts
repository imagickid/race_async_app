import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWinner as deleteWinnerApi } from "../../api/apiWinners";

function useDeleteWinner() {
  const queryClient = useQueryClient();

  const { mutate: deleteWinner } = useMutation({
    mutationFn: deleteWinnerApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["winners"],
      });
    },
  });

  return { deleteWinner };
}

export default useDeleteWinner;
