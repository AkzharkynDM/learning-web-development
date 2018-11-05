var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  needed_response(req, res)
});

function needed_response(req, res){
var input=req.body.text
console.error(req.body)
var wordCount=input.split(/\s+/g).length;
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
var a=input.replace(/\s+/g, '').toLowerCase()
var b= {};
for (let i=0;i<a.length;i++){
    if((a.match(new RegExp(a[i], "g"))).length > 1){
        b[a[i]]=(a.match(new RegExp(a[i], "g"))).length;
    }
    if((a.match(new RegExp(a[i], "g"))).length == 1){
        b[a[i]]=1;
    }
}
//b.sort(function(first, second) { return first > second ? 1 : -1});
return b
}
module.exports = router;
