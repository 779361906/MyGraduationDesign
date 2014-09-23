var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name : String,
    password : String,
    email : String
});
var userModel = mongoose.model('users',UserSchema);
function User(user){
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
};
module.exports = User;
/* save user info in mongodb*/
User.prototype.save = function save(callback){
    var user = {
        name: this.name,
        password: this.password,
        email : this.email
    };
  var userEntity = new userModel({name: this.name,password: this.password,email:this.email});
  userEntity.save(function(err){
    callback(err, user);
  });
};
/* get a user by email*/
User.get = function get(email, callback) {
  userModel.findOne({email : email},function(err,doc){
    //按email查找用户,findone函数中｛email:email｝第一个email是数据库的key值，第二个email是参数
    if(doc){
      //封装文档为user对象
      var user = new User(doc);
      callback(err, user);
       }else{
      callback(err, null);
       }
  });
};
