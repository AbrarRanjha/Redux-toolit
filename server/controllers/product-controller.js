
const Product=require('../models/productSchema.js');
const addProducts=require('../models/addP.js');
 const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}


const addProductss=async (request,response)=>{
    try {
        const exist = await Product.findOne({ id: request.body.id });
        if(exist) {
            return response.status(401).json('User already exist');
            
        }
        const user = request.body;
        const newUser = new Product(user);
        await newUser.save();
        response.status(200).json(`user has been successfully registered`);
        console.log('registered');
    } catch (error) {
        response.json(error);
        console.log(error);
    }
}



const deleteProduct=async(req,res)=>{
    try {
        const respon=await Product.deleteOne(req.params._id);
        // respon.delete();
        res.status(200).json('product deleted successfully');
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={getProducts,addProductss,deleteProduct};