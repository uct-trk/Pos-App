const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        title: {type: String, require: true},
        img: {type : String, require: true},
        price: {type: Number, require: true},
        category: {type: String, require: true},
        id: {type: String}
    },
    {
        timestamps: true
    }
)

//tırnak içinde yazılan veri tabanında tutmak istenilen değer (isim)
const Product = mongoose.model("products", ProductSchema);

module.exports = Product;