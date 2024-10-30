// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string; // Mensaje que se recibe como prop
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold">Mensaje Recibido</h2>
        <p className="mt-4">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
