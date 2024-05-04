function StartFinishLine({
  text,
  carColor,
}: {
  text: string;
  carColor: string;
}) {
  return (
    <div
      className="mt-4 rotate-90 text-sm sm:text-base w-10 sm:w-14 text-center border-b-2 items-center self-baseline mr-5"
      style={{ color: carColor }}
    >
      {text}
    </div>
  );
}

export default StartFinishLine;
