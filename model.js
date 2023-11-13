const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017');

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number
});


const item = mongoose.model('First', fruitSchema);
// const element2 = new item({
//     name: 'banana',
//     rating: 4
// });
// // element.save();


// const element3 = new item({
//     name: 'apple',
//     rating: 3
// });

// await item.insertMany([element2, element3], function(err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("inserted")
//     }
// });




// retrive data from dabase
item.find(function(err, data) {
    if (err) {
        console.log(err);

    } else {
        console.log(data)
    }
});