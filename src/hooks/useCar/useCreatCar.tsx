import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCar } from "../../api/apiCars";

function useCreateCar() {
  const queryClient = useQueryClient();

  const { mutate: createNewCar } = useMutation({
    mutationFn: createCar,
    onSuccess: () => {
      toast.success("Car successfully created");
      queryClient.invalidateQueries({ queryKey: ["garage"] });
    },
  });
  return { createNewCar };
}

export default useCreateCar;
