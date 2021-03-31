let mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: { type: String, required: true },
});

var User = mongoose.model("User", userSchema);

const createUser = (username, done) => {
  var newUser = new User({ username: username });

  newUser.save((err, data) => {
    if (err) {
      return done(err);
    }

    done(null, data);
  });
};

const getUsers = (done) => {
  User.find()
    .select("username _id")
    .exec((err, data) => {
      if (err) {
        return done(err);
      }
      done(null, data);
    });
};

exports.UserModel = User;
exports.createUser = createUser;
exports.getUsers = getUsers;
