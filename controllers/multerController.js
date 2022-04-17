import multer from "multer";

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/restaurantImgs");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `restaurant-${Date.now()}.${ext}`);
    },
});

// test if file is an img
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new Error("Not an image"), false);
    }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

export const uploadBgImg = upload.single("bgImg");
