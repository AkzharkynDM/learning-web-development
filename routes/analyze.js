var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  needed_response(req, res)
});

function needed_response(req, res){
var input=req.body.text
console.error(req.body)

res.status(200).json({
  "textLength":{"withSpaces":with_spaces(input),"withoutSpaces":without_spaces(input)},
  "wordCount":word_count(input),
  "characterCount":character_count(input)});
}
function with_spaces(input){
    var count = 0;
    for (let i=0;i<input.length;i++){
      if (!input.charAt(i)=="\n")
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
  //var resultantList=[]
  input=input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  input=input.replace(/\s+/g, '').toLowerCase()
  var resultantList=[]
  for (let i=0;i<input.length;i++){

  if (isNaN(parseInt(input[i]))) {
    if((input.match(new RegExp(input[i], "g"))).length > 1){
      var element={letter:input[i], count:(input.match(new RegExp(input[i], "g"))).length};
      if (resultantList.includes(element)) continue
        resultantList.push(element);
    }
    if((input.match(new RegExp(input[i], "g"))).length == 1){
      var element={letter:input[i], count:1};
      if (resultantList.includes(element)) continue
        resultantList.push(element);
    }
    }
  }
  //for (let i=0;i<resultantList.length;i++){
  //  console.log(resultantList[i].letter)
  //}

  resultantList.sort(function(first, second) {return first.letter > second.letter;});

  var resultantListNoDub = resultantList.reduce((unique, o) => {
      if(!unique.some(obj => obj.letter === o.letter && obj.count === o.count)) {
        unique.push(o);
      }
      return unique;
  },[]);

  //for (let i=0;i<resultantListNoDub.length;i++){
  //  console.log(resultantListNoDub[i].letter)
  //}
  var resultantProperListNoDub=[]
  for (let i=0;i<resultantListNoDub.length;i++){
    var obj = {};
    obj[resultantListNoDub[i].letter] = resultantListNoDub[i].count;
    console.log( obj[resultantListNoDub[i].count]);
    resultantProperListNoDub.push(obj)
}
  return resultantProperListNoDub;

}


module.exports = router;
