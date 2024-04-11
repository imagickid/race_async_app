import { ReactNode } from 'react';

interface CarProps {
  children?: ReactNode;
}

function Car({ children }: CarProps) {
  return <div className="flex items-center mx-4">{children}</div>;
}

export default Car;
