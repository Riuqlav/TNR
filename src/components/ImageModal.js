import React, { useState, useEffect } from "react";

const ImageModal = ({
  isOpen,
  images,
  description,
  onClose,
  showDescription,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    setSelectedImage(null);
  }, [isOpen]);

  return isOpen ? (
    <div
      id="modal-background"
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div className="bg-white p-5 relative h-[90vh] w-[80vw] overflow-y-auto">
        <button
          className="absolute top-2 right-2"
          onClick={() => {
            onClose();
            setSelectedImage(null);
          }}
        >
          Close
        </button>

        {showDescription ? (
          <div className="text-base leading-relaxed">{description}</div>
        ) : selectedImage ? (
          <div className="h-full flex items-center justify-center">
            <button
              className="absolute top-2 left-2"
              onClick={() => setSelectedImage(null)}
            >
              Back
            </button>
            <img
              src={selectedImage}
              alt="selected"
              className="object-contain h-full w-full"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((img, index) => (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                key={index}
                src={img}
                alt={`image-${index}`}
                className="cursor-pointer object-cover"
                onClick={() => handleClick(img)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default ImageModal;
