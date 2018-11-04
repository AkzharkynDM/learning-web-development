var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var result=needed_reponse(req, res)
  res.render('index', { title: result });
});

function needed_response(req, res){
var input=req.data
console.log(input)
var wordCount=input.split(" ").length;
var withSpaces=input.length;
var withoutSpaces=input.replace(/\s+/g, '').length;
res.status(400).json({
  "textLength":{"withSpaces":withSpaces,"withoutSpaces":withoutSpaces},
  "wordCount":wordCount,
  "characterCount":character_count(input)});
}

function character_count(input){
//TODO:I should consider upper and lower case also
//[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
var a = "acvbasbb";
var b= {};
for (let i=0;i<a.length;i++){
    if((a.match(new RegExp(a[i], "g"))).length > 1){
        b[a[i]]=(a.match(new RegExp(a[i], "g"))).length;
    }
}
//b.sort(function(first, second) { return first > second ? 1 : -1});
console.log(b);
return b;
}
module.exports = router;
