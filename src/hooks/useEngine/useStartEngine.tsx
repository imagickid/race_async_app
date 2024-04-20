import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { startStopEngine } from "../../api/apiEngine";

function useStartEngine() {
  const queryClient = useQueryClient();

  const {
    data,
    mutate: startEngine,
    isPending: isTurningOn,
  } = useMutation({
    mutationFn: startStopEngine,
    onSuccess: (dataValue, variables) =>
      queryClient.setQueryData(["carData", variables.id], dataValue),
    onError: (err) => toast.error(err.message),
  });
  return { data, startEngine, isTurningOn };
}

export default useStartEngine;
