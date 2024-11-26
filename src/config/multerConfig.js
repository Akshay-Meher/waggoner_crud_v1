const multer = require('multer');
const fs = require('fs');
const path = require('path');
// const test = require('../../public');

// Ensure the temp directory exists
const tempDir = path.join(__dirname, '..', '..', 'public', 'temp');

console.log("tempDir ", tempDir);

if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});


const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'));
    }
};


const upload = multer({
    storage,
    // fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
