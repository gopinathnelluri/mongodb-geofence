const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-us4qh.mongodb.net/demo?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const polygonSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Polygon'],
        required: true
    },
    coordinates: {
        type: [[[Number]]], // Array of arrays of arrays of numbers
        required: true
    }
});

const citySchema = new mongoose.Schema({
    name: String,
    location: polygonSchema
});


const citySchemaModel = mongoose.model('CitySchema', citySchema);

/*
citySchemaModel.create({
    name: "tampa",
    location: {
        type: "Polygon",
        coordinates: [
            [
                [-109, 41],
                [-102, 41],
                [-102, 37],
                [-109, 37],
                [-109, 41]
            ]
        ]
    }
});

*/

const testPoint = {
    type: 'Point',
    coordinates: [-105, 40]
}

citySchemaModel.findOne(
    {
        location: {
            $geoIntersects: {
                $geometry: testPoint
            }
        }
    }
).then((data) => {
    console.log(data);
});


