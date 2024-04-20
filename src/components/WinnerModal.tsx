interface WinnerModalProps {
  onClose: () => void;
  winner: {
    name: string | null;
    time: number | null;
    id: number | null;
  };
}

function WinnerModal({ onClose, winner }: WinnerModalProps) {
  if (!winner) return null;
  const { name, time } = winner;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex flex-col bg-gray-600 rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4">Asynchronous Winner</h2>
        <p className="mb-2 text-2xl">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="mb-2 text-2xl">
          <span className="font-semibold">Time:</span> {time?.toFixed(2)} s
        </p>
        <button
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
