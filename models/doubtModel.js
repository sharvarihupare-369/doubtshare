const mongoose = require("mongoose");

const doubtSchema = new mongoose.Schema({
   studentId : {type:mongoose.Schema.Types.ObjectId,ref:'user'},
   subject : {type:String,required:true},
   question : {type:String,required:true},
   status : {type:String,enum:['pending','resolved','accepted'],default:'pending'},
   createdAt : {type:Date,default:Date.now},
   // tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
})

const DoubtModel = mongoose.model('doubt',doubtSchema);

module.exports = DoubtModel;