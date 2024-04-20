import { ASYNC_RACE_API, PAGE_SIZE_WINNERS } from "../utils/constants";

export async function getWinners(page: number, sort: string, order: string) {
  const response = await fetch(
    `${ASYNC_RACE_API}/winners/?_limit=${PAGE_SIZE_WINNERS}&_page=${page}&_sort=${sort}&_order=${order}`
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

export async function getWinner(id: number) {
  const response = await fetch(`${ASYNC_RACE_API}/winners/${id}`);
  if (!response.ok) {
    throw new Error("Winner is not found");
  }
  const data = await response.json();
  return data;
}

interface DataBodyProps {
  id: number;
  wins: number;
  time: number;
}

export async function createWinner(dataBody: DataBodyProps) {
  try {
    const response = await fetch(`${ASYNC_RACE_API}/winners`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataBody),
    });
    if (!response.ok) {
      throw new Error("There was a problem creating a car");
    }
  } catch (error) {
    return error;
  }
  return null;
}

export async function deleteWinner(id: number) {
  try {
    const response = await fetch(`${ASYNC_RACE_API}/winners/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("No car found with that id");
  } catch (error) {
    return "There was a promlem finding that car";
  }
  return null;
}

interface UpdateWinnerProps {
  id: number;
  data: {
    wins: number;
    time: number;
  };
}

export async function updateWinner({ id, data }: UpdateWinnerProps) {
  try {
    const response = await fetch(`${ASYNC_RACE_API}/winners/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return "Error updating winner";
  }
}
