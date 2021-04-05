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

const getUserExerciseLog = async (userId, filter, done) => {
  const user = await User.findById(userId);
  const username = user.username;
  let exerciseQuery = { userId: userId };
  let dateQuery = {};

  if (filter.from) {
    dateQuery["$gte"] = new Date(filter.from);
    exerciseQuery.date = dateQuery;
  }

  if (filter.to) {
    dateQuery["$lt"] = new Date(filter.to);
    exerciseQuery.date = dateQuery;
  }

  Exercise.find(exerciseQuery)
    .select({ description: 1, duration: 1, date: 1, _id: 0 })
    .limit(filter.limit)
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
