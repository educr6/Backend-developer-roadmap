let mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

let urlSchema = new Schema({
  originalUrl: { type: String, required: true },
});

var Url = mongoose.model("Url", urlSchema);

const createUrl = (url, done) => {
  var newUrl = new Url({ originalUrl: url });

  newUrl.save((err, data) => {
    if (err) {
      return done(err);
    }

    done(null, data);
  });
};

const findUrlById = (urlId, done) => {
  Url.findById(urlId, (err, data) => {
    if (err) {
      return done(err);
    }
    done(null, data);
  });
};

exports.UrlModel = Url;
exports.createUrl = createUrl;
exports.findUrlById = findUrlById;
