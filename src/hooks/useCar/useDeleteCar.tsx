import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCar as deleteCarApi } from "../../api/apiCars";

function useDeleteCar() {
  const queryClient = useQueryClient();

  const { mutate: deleteCar } = useMutation({
    mutationFn: deleteCarApi,
    onSuccess: () => {
      toast.success("Car successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["garage"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteCar };
}

export default useDeleteCar;
