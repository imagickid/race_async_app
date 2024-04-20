import { useState } from "react";
import Button from "./Button";

interface InputProps {
  text: string;
  func: (carName: string, carColor: string) => void;
}

export default function Input({ text, func }: InputProps) {
  const [carName, setCarName] = useState<string>("");
  const [carColor, setCarColor] = useState<string>("#ffffff");

  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
        placeholder="Car brand..."
        className="text-red-500 font-semibold border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-pink-500"
      />
      <input
        type="color"
        value={carColor}
        onChange={(e) => setCarColor(e.target.value)}
        className="rounded-lg border border-gray-300 focus:outline-none w-6"
      />
      <Button
        text={text}
        color="emerald"
        func={() => {
          func(carName, carColor);
          setCarName("");
        }}
      />
    </div>
  );
}
