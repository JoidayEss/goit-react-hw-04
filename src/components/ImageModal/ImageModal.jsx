import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!imageUrl) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={s.overlay}
      className={s.content}
      ariaHideApp={false}
      closeTimeoutMS={200}
    >
      <button onClick={onClose} className={s.btn}>
        Close
      </button>
      <img src={imageUrl} alt="Selected" className={s.img} />
    </Modal>
  );
};

export default ImageModal;
