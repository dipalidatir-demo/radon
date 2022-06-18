const mongoose = requires('mongoose')
const ObjectId = mongoose.Schema.type.ObjectId
const orderSchema = new mongoose.Schema({
    user_Id: ObjectId,
    productId: ObjectId,
    amount: Number,
    isFreeAppUser: Boolean,
    date: String,
}, { timestamps: true });
module.exports = mongoose.model('order', orderSchema)

