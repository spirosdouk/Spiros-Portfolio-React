"use client";

import React, { useState } from "react";
import PreviewModal from "./PreviewModal";

const PreviewControl: React.FC<{ document: string }> = ({ document }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  const documentUrl = "/assets/Resume-SpyrosDoukeris.pdf";

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Preview CV
      </button>
      {isModalOpen && <PreviewModal document={documentUrl} />}
    </>
  );
};

export default PreviewControl;
