const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user").UserModel;

let exerciseSchema = new Schema({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date },
});

let Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = (exercise, done) => {
  let newExcercise = new Exercise(exercise);

  newExcercise.save((err, data) => {
    if (err) {
      return done(err);
    }

    done(null, data);
  });
};

const getUserExerciseLog = async (userId, done) => {
  const user = await User.findById(userId);
  const username = user.username;

  Exercise.find({ userId: userId })
    .select({ description: 1, duration: 1, date: 1, _id: 0 })
    .exec((err, data) => {
      if (err) {
        return done(err);
      }

      const exerciseCount = data.length;
      const result = {
        _id: userId,
        username: username,
        count: exerciseCount,
        log: data,
      };

      done(null, result);
    });
};

const setExerciseDate = (exercise) => {
  if (exercise.date === undefined) {
    exercise.date = Date.now();
  }
  exercise.date = new Date(exercise.date).toDateString();
  console.log("from inside setExercise: ", exercise.date);
};

exports.ExerciseModel = Exercise;
exports.createExercise = createExercise;
exports.setExerciseDate = setExerciseDate;
exports.getUserExerciseLog = getUserExerciseLog;
