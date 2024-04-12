function StartFinishLine({
  text,
  carColor,
}: {
  text: string;
  carColor: string;
}) {
  return (
    <div
      className="mt-4 rotate-90 w-14 text-center border-b-2 items-center self-baseline mr-10"
      style={{ color: carColor }}
    >
      {text}
    </div>
  );
}

export default StartFinishLine;
