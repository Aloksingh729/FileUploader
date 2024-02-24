import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi'; // Importing cloud upload icon
import './App.css'; // Import your CSS file for styling

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSave = () => {
    // Handle save logic here
    console.log('Files saved:', selectedFiles);
    setSelectedFiles([]); // Clear selected files after saving
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setSelectedFiles([]);
  };

  return (
    <div className="container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <FiUploadCloud className="cloud-icon" />
        <p>Drag 'n' drop some files here, or click to select files</p>
         
     
      </div>
      <div className="buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      {selectedFiles.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {selectedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
