
import multer from "multer"

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  
  const upload = multer({storage:storage})
  
  //Creating Upload img
  app.use('/images', express.static("./upload/images"))
  
  app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        Image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
  })