"use client";

import React from "react";

interface PreviewModalProps {
  document: string;
  toggleModal: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  document,
  toggleModal,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="relative bg-white p-4 shadow-lg w-full h-full max-w-4xl max-h-[90vh]">
        <iframe
          src={document}
          title="Resume Preview"
          className="w-full h-full"
        ></iframe>

        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PreviewModal;
