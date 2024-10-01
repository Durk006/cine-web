'use client'

const UploadForm = () => {


  const handleSubmit = async (e) => {
    
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
