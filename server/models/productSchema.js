const mongoose=require('mongoose');


const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    price: String,
    tagline: String,
    picture: String,
});


const products = mongoose.model('shop', productSchema);

module.exports= products;