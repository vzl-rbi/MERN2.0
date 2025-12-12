import multer from "multer";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(file);
    const allowedFileType = ["image/png", "image/jpg", "image/jpeg"];
    if (!allowedFileType.includes(file.mimetype)) {
      cb(new Error("This filetype is not supported!!"));
      return;
    }
    cb(null, "./storage"); //cb(error, success)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
