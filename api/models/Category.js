const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
    {
        title: {type: String, require: true},
        categoryId: {type: String}
    },
    {
        timestamps: true
    }
)

//tırnak içinde yazılan veri tabanında tutmak istenilen değer (isim)
const Category = mongoose.model("categories", CategorySchema);

module.exports = Category;