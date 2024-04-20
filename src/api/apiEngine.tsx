import { ASYNC_RACE_API } from '../utils/constants';

interface startStopEngineProps {
  id: number;
  status: string;
}

export async function startStopEngine({ id, status }: startStopEngineProps) {
  try {
    const response = await fetch(
      `${ASYNC_RACE_API}/engine/?id=${id}&status=${status}`,
      { method: 'PATCH' }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error starting car engine:', error);
  }
}

export async function driveModeEngine(id: number) {
  try {
    const response = await fetch(
      `${ASYNC_RACE_API}/engine/?id=${id}&status=drive`,
      { method: 'PATCH' }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
