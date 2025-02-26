import { useEffect, useRef } from "react";

type Props = {
  ganador: string | null;
  empate: boolean;
  modalOpen: boolean;
  onClose: () => void;
};

function GanadorModal({ ganador, empate, modalOpen, onClose }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [modalOpen, empate]);

  const mensaje = empate ? "¡Ha habido un empate!" : `El ganador es ${ganador}`;
  const mensaje2 = empate ? "¡Empate!" : "¡Ganador!";

  return (
    (ganador || empate) && (
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{mensaje2}</h3>
          <p className="py-4">{mensaje}</p>
          <div className="modal-action">
            <button onClick={onClose} className="btn">
              Cerrar
            </button>
          </div>
        </div>
      </dialog>
    )
  );
}

export default GanadorModal;
