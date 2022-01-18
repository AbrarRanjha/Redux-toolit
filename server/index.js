const express=require('express');
const cors =require('cors');
const dotenv=require('dotenv');
// const {products}=require('./constant/data');
// const products=require('./models/productSchema');
const app=express();
app.use(cors());
dotenv.config({path:'./config.env'});
require('./database/db.js');
app.use(express.json());

app.use(require('./routes/routes.js'));
const PORT=process.env.PORT || 8080;
// const DefaultData=require('./controllers/defaultEnteties.js');








app.listen(PORT,()=>{
    console.log(`app listen at ${PORT}`);
});


// DefaultData();