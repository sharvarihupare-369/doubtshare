const mongoose = require("mongoose");

const doubtSchema = new mongoose.Schema({
   studentId : {type:mongoose.Schema.Types.ObjectId,ref:'user'},
   tutorId : {type:mongoose.Schema.Types.ObjectId, ref:'user'},
   subject : {type:String,required:true},
   question : {type:String,required:true},
   tutorName : {type:String},
   status : {type:String,enum:['pending','resolved','accepted'],default:'pending'},
   createdAt : {type:Date,default:Date.now},
})

const DoubtModel = mongoose.model('doubt',doubtSchema);

module.exports = DoubtModel;