const express=require('express');
const cookieParser=require('cookie-parser');
const router = express.Router();
router.use(cookieParser());
require('../database/db');
const{ getProducts,addProductss,deleteProduct }=require('../controllers/product-controller.js');
const {uploadImage,getImage}=require('../controllers/image-controller.js');
const {signup,login}=require('../controllers/auth-controller.js');
const upload =require('./upload.js');
const authenticate=require('../middleware/authenticate.js');

router.get('/products', getProducts);
router.post('/addProducts', addProductss);
router.delete('/deleteProduct/:id',deleteProduct)

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/signup',signup);
router.post('/login', login);



module.exports=router;