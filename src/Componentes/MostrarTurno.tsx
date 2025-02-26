type Props = { turno: string; turns: { x: string; o: string } };

function MostrarTurno({ turno, turns }: Props) {
  return (
    <div className="mt-6 flex justify-center items-center gap-3">
      <p
        className={`${
          turno === turns.x && "bg-blue-600"
        } flex justify-center items-center text-2xl border w-12 h-12 text-center`}
      >
        {turns.x}
      </p>
      <p
        className={`${
          turno === turns.o && "bg-blue-600"
        } flex justify-center items-center text-2xl border w-12 h-12 text-center`}
      >
        {turns.o}
      </p>
    </div>
  );
}

export default MostrarTurno;
