import { useState } from 'react';
import Button from './Button';
import { useCreateCar } from '../hooks/useCreatCar';

interface inputProps {
  text: string;
}

export default function Input({ text }: inputProps) {
  const [carName, setCarName] = useState<string>('');
  const [carColor, setCarColor] = useState<string>('#ffffff');
  const { createNewCar } = useCreateCar();

  function handleCreateUpdateNewCar() {
    if (!carName) return;
    createNewCar({ name: carName, color: carColor });
    setCarName('');
  }

  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        value={carName}
        onChange={e => setCarName(e.target.value)}
        placeholder="Car brand..."
        className="text-red-500 font-semibold border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-pink-500"
      />
      <input
        type="color"
        value={carColor}
        onChange={e => setCarColor(e.target.value)}
        className="rounded-lg border border-gray-300 focus:outline-none w-6"
      />
      <Button text={text} color="emerald" func={handleCreateUpdateNewCar} />
    </div>
  );
}
