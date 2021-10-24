const mongoose =  require('mongoose');

const userSchema = mongoose.Schema({
    id: String,
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("Users", userSchema);

module.exports = User;