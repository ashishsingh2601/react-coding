import React, { useState } from 'react';

function FilePreview() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Validate files if needed
    const validFiles = files.filter((file) => {
      // Implement your validation logic here
      return true;
    });

    setSelectedFiles(validFiles);

    // Generate preview URLs for valid files
    const previews = validFiles.map((file) => URL.createObjectURL(file));
    setFilePreviews(previews);
  };

  const handleSubmit = async () => {
    try {
      setUploading(true);

      // Simulate asynchronous file uploading
      await uploadFiles(selectedFiles);

      // After successful upload, clear selected files and previews
      setSelectedFiles([]);
      setFilePreviews([]);
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setUploading(false);
    }
  };

  const uploadFiles = async (files) => {
    // Simulated delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulated successful upload
    console.log('Files uploaded successfully:', files);
  };

  return (
    <div>
      <h2>File Upload Form</h2>
      <input type="file" multiple onChange={handleFileChange} />
      {filePreviews.map((preview, index) => (
        <div key={index}>
          <img src={preview} alt={`Preview ${index}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
      ))}
      <button type="button" onClick={handleSubmit} disabled={selectedFiles.length === 0 || uploading}>
        {uploading ? 'Uploading...' : 'Submit'}
      </button>
    </div>
  );
}

export default FilePreview;
