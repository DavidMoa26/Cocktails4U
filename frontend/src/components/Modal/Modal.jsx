import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";
import { GrClose } from "react-icons/gr";

const ProductModal = ({ open, onClose, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal-page" onClick={onClose} />
      <div className="modal-window">
        <GrClose
          onClick={onClose}
          style={{
            fontSize: "1.5rem",
            position: "absolute",
            right: 0,
            margin: "0.5rem",
            cursor: "pointer",
          }}
        />
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ProductModal;
