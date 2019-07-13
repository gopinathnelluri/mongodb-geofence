
/*
const GeoSchema = new Schema({
    type: {
        default: "Point",
        type: String
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

const MyGeoData = new Schema({
    name: { type: String, default: 'earth' },
    loc: GeoSchema,
    buff: Buffer
});

const MyGeoDataModel = mongoose.model('MyGeoData', MyGeoData);

const instance = new MyGeoDataModel({
    name: "test",
    loc: {
        type: "Point",
        coordinates: [27.964157, -82.452606]
    }
});

instance.save();
*/