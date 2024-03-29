const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const internSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    email: { type: String, required: true, unique: true, trim:true },
    mobile: { type: String, unique: true, required:true, trim: true },
    collegeId: { type: ObjectId, ref: "College" },
    isDeleted: { type: Boolean, default: false },
  }
);

module.exports = mongoose.model("Intern", internSchema);