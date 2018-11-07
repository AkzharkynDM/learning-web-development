var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  needed_response(req, res)
});

function needed_response(req, res){
var input=req.body.text
console.error(req.body)

res.status(400).json({
  "textLength":{"withSpaces":with_spaces(input),"withoutSpaces":without_spaces(input)},
  "wordCount":word_count(input),
  "characterCount":character_count(input)});
}
function with_spaces(input){
  /*if (input=='s+')
    input = input.split('');
  else
    input = input.trim().split('');
    var length = 0;
    input.forEach(function(element) {
    length++;
    });
    return length;*/
    var count = 0;
    for (let i=0;i<input.length;i++){
      if (!input.charAt(i)=="\n")
      console.log(input.charAt(i))
      count += 1;
    }
  return count;
}

function word_count(input){
  input = input.replace(/(^\s*)|(\s*$)/gi,"");
  input = input.replace(/[ ]{2,}/gi," ");
  input = input.replace(/\n /,"\n");
  var wordCount=input.split(' ').length;
  if (input=="") return 0
  return wordCount;

}

function without_spaces(input){
  input = input.replace(/(^\s*)|(\s*$)/gi,"");
  input = input.replace(/[ ]{2,}/gi," ");
  input = input.replace(/\n /,"");
  var withoutSpaces=input.replace(/\s+/g, '').length;
  return withoutSpaces
}

function character_count(input){
  var resultantList=[]
var a=input.replace(/\s+/g, '').toLowerCase()

for (let i=0;i<a.length;i++){
  var b= {};
  if (isNaN(parseInt(a[i]))) {
    if((a.match(new RegExp(a[i], "g"))).length > 1){
        b[a[i]]=(a.match(new RegExp(a[i], "g"))).length;
    }
    if((a.match(new RegExp(a[i], "g"))).length == 1){
        b[a[i]]=1;
    }
    resultantList.push(b)
  }
}

return resultantList.sort(function(a, b) {return a > b;});

}
module.exports = router;
