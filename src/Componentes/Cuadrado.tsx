type Props = {
  indice: number;
  onClick: (indice: number) => void;
  children: React.ReactNode;
};

function Cuadrado({ indice, onClick, children }: Props) {
  return (
    <div
      onClick={() => onClick(indice)}
      className="flex justify-center pb-4 items-center text-6xl w-full h-full border border-white hover:cursor-pointer"
    >
      {children}
    </div>
  );
}

export default Cuadrado;
