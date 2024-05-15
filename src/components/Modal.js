import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

export default function Modal({ isOpen, onRequestClose, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      className="bg-white p-4 rounded-md shadow-lg"
    >
      {children}
    </ReactModal>
  );
}
