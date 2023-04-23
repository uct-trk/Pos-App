const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
    {
        customerName: {type: String, require: true},
        customerPhoneNumber: {type: Number, require: true},
        paymentMode: {type: String, require: true},
        cartItems: {type: Array, require: true},
        subTotal: {type: Number, require: true},
        tax: {type: Number, require: true},
        totalAmount : {type: Number, require: true},
        id: {type: String}
    },
    { timestamps: true }
)

//tırnak içinde yazılan veri tabanında tutmak istenilen değer (isim)
const Bill = mongoose.model("bills", BillSchema);

module.exports = Bill;