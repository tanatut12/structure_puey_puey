export const uploadImage = (req, res) => {
    res.json({
      success: 1,
      Image_url: req.file.path, // Cloudinary URL
    });
  };