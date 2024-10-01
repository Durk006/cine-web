'use client'
import cloudinary from '../../cloudinary';
const UploadForm = () => {


  const handleSubmit = async (e) => {
    const results = await cloudinary.uploader.upload(e,
      {
          resource_type:"auto"
      }
  )
  console.log(results)
  const url = cloudinary.url(results.public_id)
  console.log(url)
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
