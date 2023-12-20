import multer, { Options } from "multer";
import path from "path";

export const uploadsConfig = {
    storage: multer.diskStorage({
        destination: path.join(__dirname, "..", "..", "uploads"),
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`)
        }
    }),

    limits: {
        fileSize: 10 * 1024 * 1024 //10MB
    },

    fileFilter: (req, file, cb) => {
        const mimeType = ["image/png", "image/jpg", "image/jpeg", "image/gif"]

        if(!mimeType.includes(file.mimetype)) {
            return cb(null, false)
        }

        cb(null, true)
    },
} as Options