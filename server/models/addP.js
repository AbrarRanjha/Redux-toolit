const mongoose=require('mongoose');


const addP = new mongoose.Schema({
    id: String,
    price: String,
    tagline: String
});


const addProducts = mongoose.model('add', addP);

module.exports= addProducts;