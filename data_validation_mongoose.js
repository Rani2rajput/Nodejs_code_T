const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017')
const userSchema = new mongoose.schema({
    name: {
        type: String,
        required: [true, 'Enter the name of fruits']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    }
});

const item = mongoose.model('First', userSchema)
const element = new item({
    rating: 9
});

element.save();
