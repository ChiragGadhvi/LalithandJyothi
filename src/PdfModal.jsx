import React, { useEffect, useRef } from 'react';

const PdfModal = ({ show, onHide, pdfUrl }) => {
  const modalRef = useRef(null);

  const handleClose = () => {
    // Reset the iframe src when the modal is closed
    if (modalRef.current) {
      modalRef.current.src = '';
    }
    onHide(); // Call the callback to hide the modal
  };

  // Ensure modal visibility based on the "show" prop
  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.src = pdfUrl; // Set PDF URL when modal is shown
    }
  }, [show, pdfUrl]);

  return (
    <div
      className={`modal-overlay ${show ? 'show' : ''}`} // Toggle visibility
      onClick={handleClose} // Close when clicking outside the modal
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
      >
        <button
          className="modal-close"
          onClick={handleClose}
        >
          &times;
        </button>
        <iframe
          ref={modalRef}
          className="modal-iframe"
          title="PDF Viewer"
          
        />
      </div>
    </div>
  );
};

export default PdfModal;
