import { ReactNode } from 'react';

interface ButtonProps {
  color: keyof typeof colors;
  text: string;
  disabled?: boolean;
  func: () => void;
  children?: ReactNode;
}

interface Colors {
  cyan: string;
  pink: string;
  emerald: string;
  rose: string;
  yellow: string;
}

const colors: Colors = {
  cyan: 'border-2 border-cyan-500 hover:border-cyan-700 text-cyan-300 disabled:border-cyan-700',
  pink: 'border-2 border-pink-500 hover:border-pink-700 text-pink-300 disabled:border-pink-700',
  emerald:
    'border-2 border-emerald-500 hover:border-emerald-700 text-emerald-300 disabled:border-emerald-700',
  rose: 'border-2 border-rose-500 hover:border-rose-700 text-rose-300 disabled:border-rose-700',
  yellow:
    'border-2 border-yellow-500 hover:border-yellow-700 text-yellow-300 disabled:border-yellow-700',
};

export default function Button({
  color,
  text,
  disabled,
  func,
  children,
}: ButtonProps) {
  const pickedColor = colors[color];

  return (
    <button
      disabled={disabled}
      className={`text-xs py-1 px-2 ${pickedColor} rounded flex items-center gap-2`}
      onClick={func}
    >
      {text}
      {children}
    </button>
  );
}
