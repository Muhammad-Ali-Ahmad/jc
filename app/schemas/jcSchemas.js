const mongoose = require('mongoose');

const jcSchema = new mongoose.Schema({
    message: String
});

jcSchema.statics.findByMessage = function(message) {
    console.log(`findByMessage [${message}]`)
    return this.find({ message: {$regex: message}});
}

jcSchema.statics.findById = function(id, cb) {
    console.log(`findByID [${id}]`)
    return this.find({ _id: id}, cb);
}

const Message = mongoose.model('experience', jcSchema);

module.exports=Message