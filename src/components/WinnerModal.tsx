import { useEffect, useRef } from "react";
import useAddOrUpdateWinner from "../hooks/useWinners/useAddOrUpdateWinner";

interface WinnerModalProps {
  onClose: () => void;
  winner: {
    name: string;
    time: number;
    id: number;
  } | null;
}

function WinnerModal({ onClose, winner }: WinnerModalProps) {
  const hasWinnerChanged = useRef(false);
  const { handleCreateOrUpdate, isFetching } = useAddOrUpdateWinner();

  useEffect(() => {
    if (!hasWinnerChanged.current && !isFetching) {
      handleCreateOrUpdate(winner);
      hasWinnerChanged.current = true;
    }
  }, [handleCreateOrUpdate, winner, isFetching]);

  if (!winner) return null;
  const { name, time } = winner;

  return (
    <div className="fixed inset-1/2 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="flex flex-col bg-gray-600 rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-nowrap">
          Asynchronous Winner
        </h2>
        <p className="mb-2 text-2xl">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="mb-2 text-2xl">
          <span className="font-semibold">Time:</span> {time?.toFixed(2)} s
        </p>
        <button
          type="button"
          className="cursor-pointer px-4 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default WinnerModal;
