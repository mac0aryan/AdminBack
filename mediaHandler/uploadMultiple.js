// multerConfig.js

const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../mantis-free-react-admin-template-master/public/assets/uploads/products');
  },
  filename: (req, file, cb) => {
    // Use a function to dynamically generate filename
    cb(null, generateFilename(req, file));
  }
});

// Function to generate filename based on original name
function generateFilename(req, file) {
  const extname = path.extname(file.originalname);
  return `${file.originalname}`;
}

// Init upload
const uploadMultiple = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit size to 1MB per file
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).array('images', 10); // Change to .array to allow multiple file uploads, with a limit of 10 files

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|webp/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

module.exports = { uploadMultiple };
