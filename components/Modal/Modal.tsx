import "./modal.css";

interface ModalProps {
  open: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export function Modal({ open, type, message, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${type}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{type === "success" ? "Mensagem enviada!" : "Erro ao enviar mensagem!"}</h2>

        <p>{message}</p>

        <button onClick={onClose} className="modal-btn">
          Fechar
        </button>
      </div>
    </div>
  );
}
