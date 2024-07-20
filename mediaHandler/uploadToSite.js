// multerConfig.js

const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../../EcommersePlug/myapp/public/assets/uploads/products');
  },
  filename: (req, file, cb) => {
    // Use a function to dynamically generate filename
    cb(null, generateFilename(req, file));
  }
});

// Function to generate filename based on title and originalname
function generateFilename(req, file) {
//   const title = req.body.title || 'default'; // Use default if title is not provided
  const extname = path.extname(file.originalname);
  return `${file.originalname}`;
}

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit size to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).single('image');

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

module.exports = {upload};

