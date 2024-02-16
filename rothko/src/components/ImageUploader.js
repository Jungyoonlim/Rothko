import React from 'react';

function ImageUploader({ onImageUpload }) {
  return (
    <div>
      <input type="file" accept="image/*" onChange={(e) => onImageUpload(URL.createObjectURL(e.target.files[0]))} />
    </div>
  );
}

export default ImageUploader;
