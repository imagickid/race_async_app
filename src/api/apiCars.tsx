import { ASYNC_RACE_API, PAGE_SIZE_CAR } from "../utils/constants";

export async function getCars(page: number) {
  const response = await fetch(
    `${ASYNC_RACE_API}/garage/?_limit=${PAGE_SIZE_CAR}&_page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const totalCount: number = Number(
    Object.fromEntries(response.headers.entries())["x-total-count"]
  );

  const data = await response.json();
  return { data, totalCount };
}

interface CreateColorProps {
  name: string;
  color: string;
}

export async function createCar(dataBody: CreateColorProps) {
  try {
    const response = await fetch(`${ASYNC_RACE_API}/garage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataBody),
    });
    if (!response.ok) {
      throw new Error("There was a problem creating a car");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function deleteCar(id: number) {
  try {
    const response = await fetch(`${ASYNC_RACE_API}/garage/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("No car found with that id");
  } catch (error) {
    console.error("There was a promlem finding that car", error);
  }
}

interface UpdateDataCarProps {
  id: string;
  data: {
    name: string;
    color: string;
  };
}

export async function updateCar({ id, data }: UpdateDataCarProps) {
  try {
    const response = await fetch(`${ASYNC_RACE_API}/garage/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.error("Failed to update a car:", response.statusText);
    }
  } catch (error) {
    console.error("Error updating car:", error);
  }
}

export async function getAllCars() {
  try {
    const response = await fetch(`${ASYNC_RACE_API}/garage/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Cars not found");
  }
  return null;
}
