import React from 'react';

const ComicDisplay = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={URL.createObjectURL(image)} alt={`Panel ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ComicDisplay;
