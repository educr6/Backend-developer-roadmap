let mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

let urlSchema = new Schema({
  original_url: { type: String, required: true },
  short_url: { type: Number },
});

var Url = mongoose.model("Url", urlSchema);

const createUrl = async (url, done) => {
  let urlCount = await Url.countDocuments();
  var newUrl = new Url({ original_url: url, short_url: urlCount });

  newUrl.save((err, data) => {
    if (err) {
      return done(err);
    }

    done(null, data);
  });
};

const findUrlById = (urlIdentifier, done) => {
  Url.findOne({ short_url: urlIdentifier })
    .select("original_url short_url")
    .exec((err, data) => {
      if (err) {
        return done(err);
      }
      done(null, data);
    });
};

exports.UrlModel = Url;
exports.createUrl = createUrl;
exports.findUrlById = findUrlById;
