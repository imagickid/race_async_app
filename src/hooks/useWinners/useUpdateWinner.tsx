import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateWinner as updateWinnerApi } from "../../api/apiWinners";

interface MutationDataProps {
  id: number;
  data: {
    wins: number;
    time: number;
  };
}

export function useUpdateWinner() {
  const queryClient = useQueryClient();

  const { mutate: updateWinner } = useMutation({
    mutationFn: ({ id, data }: MutationDataProps) =>
      updateWinnerApi({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["winners"] });
    },
    onError: (err) => console.error(err.message),
  });
  return { updateWinner };
}

export default useUpdateWinner;
