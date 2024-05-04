import { ASYNC_RACE_API } from "../utils/constants";

interface StartStopEngineProps {
  id: number;
  status: string;
}

export async function startStopEngine({ id, status }: StartStopEngineProps) {
  try {
    const response = await fetch(
      `${ASYNC_RACE_API}/engine/?id=${id}&status=${status}`,
      { method: "PATCH" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return "Error starting car engine";
  }
}

export async function driveModeEngine(id: number) {
  try {
    const response = await fetch(
      `${ASYNC_RACE_API}/engine/?id=${id}&status=drive`,
      { method: "PATCH" }
    );
    if (response.status === 500) return { success: false };
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
