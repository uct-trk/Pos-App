const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        username: {type: String, require: true},
        email: {type: String, require: true},
        password: {type: String, require: true},
    },
    {
        timestamps: true
    }
)

//tırnak içinde yazılan veri tabanında tutmak istenilen değer 
const User = mongoose.model("users", UserSchema);

module.exports = User; 