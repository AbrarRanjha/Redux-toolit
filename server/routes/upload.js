const multer=require('multer');
const {GridFsStorage}=require('multer-gridfs-storage');
const storage = new GridFsStorage({
    url: `mongodb+srv://HiraNisar:codeword1023@cluster0.67rft.mongodb.net/BLOG?retryWrites=true&w=majority`,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "myPhotos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

module.exports= multer({storage}); 