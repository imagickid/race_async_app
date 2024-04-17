import { FaCarSide } from 'react-icons/fa';
import useWinnerCars from '../hooks/useCar/useWinnerCars';

const tableHead = [
  { key: 1, name: 'Car Number' },
  { key: 2, name: 'Car' },
  { key: 3, name: 'Name' },
  { key: 4, name: 'Wins' },
  { key: 5, name: 'best time (Seconds)' },
];

interface winnerProps {
  id: number;
  name: string;
  color: string;
  wins: number;
  time: number;
}

export default function Table() {
  const combinedData = useWinnerCars();

  return (
    <>
      <table className="w-full border-collapse">
        <thead className="border border-solid">
          <tr>
            {tableHead.map(head => (
              <td className="p-2 text-center" key={head.key}>
                {head.name}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {combinedData?.map((winner: winnerProps) => {
            return (
              <tr key={winner.id} className="border-b">
                <td className="p-2 text-center">{winner.id}</td>
                <td className="p-2 flex justify-center">
                  {
                    <FaCarSide
                      className="text-4xl text-center"
                      style={{ color: winner.color }}
                    />
                  }
                </td>
                <td className="p-2 text-center">{winner?.name}</td>
                <td className="p-2 text-center">{winner.wins}</td>
                <td className="p-2 text-center">{winner.time.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
