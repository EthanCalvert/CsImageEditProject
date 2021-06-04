
    var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');

let imageName;

router.get("/",function(req,res){
        res.sendFile(__dirname + "/public/views/welcome.ejs");
});
router.get("/dashboard",function(req,res){
        res.sendFile(__dirname + "/public/views/dashboard.ejs");
});

router.get("/editor",function(req,res){
        res.sendFile(__dirname + "/public/views/editor.ejs");
});

router.get("/request",function(req,res){
    console.log(imageName)
        res.json({name:imageName});
});

router.post('/fileupload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
       imageName = files.filetoupload.name;
        console.log(imageName)
      var newpath = __dirname + '/public/images/' + files.filetoupload.name;
       console.log(newpath)
      mv(oldpath, newpath, function (err) {
    
 res.render(__dirname + '/public/views/editor.ejs'); 
      });
    });
});

module.exports = router;