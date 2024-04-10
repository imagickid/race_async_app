import { ASYNC_RACE_API } from '../utils/constants';

export async function getCars() {
  const response = await fetch(`${ASYNC_RACE_API}/garage`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

interface createColorProps {
  name: string;
  color: string;
}

export async function createCar(dataBody: createColorProps) {
  try {
    const response = await fetch(`${ASYNC_RACE_API}/garage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataBody),
    });
    if (!response.ok) {
      throw new Error('There was a problem creating a car');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
