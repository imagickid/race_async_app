import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCar as updateCarApi } from "../../api/apiCars";

interface MutationDataProps {
  id: string;
  data: {
    name: string;
    color: string;
  };
}

export function useUpdateCar() {
  const queryClient = useQueryClient();

  const { mutate: updateCar } = useMutation({
    mutationFn: ({ id, data }: MutationDataProps) => updateCarApi({ id, data }),
    onSuccess: () => {
      toast.success("Car succesfully updated");
      queryClient.invalidateQueries({ queryKey: ["garage"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateCar };
}

export default useUpdateCar;
