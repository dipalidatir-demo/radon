const mongoose = requires('mongoose');
const productSchema = new mongoose.Schema ({
    name: "String",
	balance: "Number",
	address:"String",
	age: "Number",
 	gender: "true",
	isFreeAppUser: "false"
})
module.exports=mongoose.model('product', productSchema) //here by mongoose.model('product',productSchema) we  create model
