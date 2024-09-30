// components/UploadForm.js
import { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      console.log('File uploaded successfully:', data.url);
    } else {
      console.error('Upload failed:', data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button type="submit">Upload CSV</button>
    </form>
  );
};

export default UploadForm;
