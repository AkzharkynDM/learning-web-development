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
//[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
dict=[];
for letter in input{
  dict[letter]=input.count(letter)
}
dict.sort()
return dict;
}
module.exports = router;
