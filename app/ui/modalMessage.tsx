 export const ModalMessage = ({ mensaje, tipoResultado, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`bg-white p-6 rounded-lg shadow-lg ${tipoResultado === 'éxito' ? 'border-green-500' : 'border-red-500'}`}>
        <p>{mensaje}</p>
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
