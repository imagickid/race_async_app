import { ReactNode } from 'react';

interface ButtonProps {
  color: keyof typeof colors;
  text: string;
  func: () => void;
  children?: ReactNode;
}

interface Colors {
  cyan: string;
  pink: string;
  emerald: string;
  rose: string;
  yellow: string;
  // Define more colors here
}

const colors: Colors = {
  cyan: 'border-2 border-cyan-500 hover:border-cyan-700 text-cyan-300',
  pink: 'border-2 border-pink-500 hover:border-pink-700 text-pink-300',
  emerald:
    'border-2 border-emerald-500 hover:border-emerald-700 text-emerald-300',
  rose: 'border-2 border-rose-500 hover:border-rose-700 text-rose-300',
  yellow: 'border-2 border-yellow-500 hover:border-yellow-700 text-yellow-300',
};

export default function Button({ color, text, func, children }: ButtonProps) {
  const pickedColor = colors[color];

  return (
    <button
      className={`text-xs py-1 px-2 ${pickedColor} rounded flex items-center gap-2`}
      onClick={func}
    >
      {text}
      {children}
    </button>
  );
}
