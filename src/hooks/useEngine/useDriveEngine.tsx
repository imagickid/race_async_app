import { useMutation, useQueryClient } from "@tanstack/react-query";
import { driveModeEngine } from "../../api/apiEngine";

function useDriveEngine() {
  const queryClient = useQueryClient();

  const {
    data,
    mutate: driveEngine,
    isPending: isDriving,
    error: isEngineFailure,
  } = useMutation({
    mutationFn: driveModeEngine,
    onSuccess: (dataValue, id) =>
      queryClient.setQueryData(["drive", id], dataValue),
  });
  return { data, driveEngine, isDriving, isEngineFailure };
}

export default useDriveEngine;
