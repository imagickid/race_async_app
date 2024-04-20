import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createWinner as createNewWinner } from "../../api/apiWinners";

function useCreateWinner() {
  const queryClient = useQueryClient();

  const { mutate: createWinner } = useMutation({
    mutationFn: createNewWinner,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["winners"] });
    },
  });
  return { createWinner };
}

export default useCreateWinner;
