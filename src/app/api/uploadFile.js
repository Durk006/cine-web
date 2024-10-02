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
}