import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
// import TextInput from './TextInput';
// import Preview from './Preview';

function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  return (
    <div className="App">
      <h1>Rothko</h1>
      <ImageUploader onImageUpload={setImage} />
      {/* <TextInput onTextChange={setText} /> */}
      {/* <Preview image={image} text={text} /> */}
    </div>
  );
}

export default App;
