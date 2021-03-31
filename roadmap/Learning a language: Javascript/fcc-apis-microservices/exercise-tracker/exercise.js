const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
