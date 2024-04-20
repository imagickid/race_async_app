import { FaCarSide } from "react-icons/fa";
import useWinnerCars from "../hooks/useCar/useWinnerCars";
import TableHeading from "./TableHeading";
import Loading from "./Loading";

const tableHead = [
  { key: 1, name: "Id" },
  { key: 2, name: "Car" },
  { key: 3, name: "Name" },
  { key: 4, name: "Wins" },
  { key: 5, name: "Time" },
];

interface WinnerProps {
  id: number;
  name: string;
  color: string;
  wins: number;
  time: number;
}

export default function Table() {
  const combinedData = useWinnerCars();

  if (!combinedData) return <Loading />;
  return (
    <table className="w-full border-collapse">
      <thead className="border border-solid">
        <tr>
          {tableHead.map((head) => (
            <TableHeading head={head} key={head.key} />
          ))}
        </tr>
      </thead>
      <tbody>
        {combinedData?.map((winner: WinnerProps) => {
          return (
            <tr key={winner.id} className="border-b">
              <td className="p-2 text-center">{winner.id}</td>
              <td className="p-2 flex justify-center">
                <FaCarSide
                  className="text-4xl text-center"
                  style={{ color: winner.color }}
                  aria-label="Car icon"
                />
              </td>
              <td className="p-2 text-center">{winner?.name}</td>
              <td className="p-2 text-center">{winner?.wins}</td>
              <td className="p-2 text-center">{winner?.time?.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
