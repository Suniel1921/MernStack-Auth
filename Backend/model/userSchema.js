const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
    },
    password : {
        type: String,
        required : true,
    },
})


//hashing user password
userSchema.pre('save', async function(next){    
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();

    //*******or******

    //    if(this.isModified('password')){
    //     this.password = await bcrypt.hash(this.password, 10);
    // }
    // next();
})



//generating token

userSchema.methods.generateToken = function(){
    return jwt.sign({_id:this._id}, 'sdkfaksdfhjkdfhjksdafh;kd',{expiresIn: '2d'});

}





const userData = mongoose.model('hamroData', userSchema);
module.exports = userData;