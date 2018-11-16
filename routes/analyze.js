var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  needed_response(req, res)
});

function needed_response(req, res){
var input=req.body.text
console.error(req.body)

res.json({
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
  input = input.replace(/\n(^\s*)|(\s*$)/gi,"");
  var word_count=input.split(' ').length;
  if (input=="") return 0
  return word_count;

}

function without_spaces(input){
  input = input.replace(/\n(^\s*)|(\s*$)/gi,"");
  input = input.replace(/[ ]{2,}/gi," ");
  var without_spaces=input.replace(/\s+/g, '').length;
  return without_spaces
}


function character_count(input){
  input=input.replace(/[^a-zA-Z]+/g, '').toLowerCase()
  const map = new Map()

  for (let i=0;i<input.length;i++){

    if((input.match(new RegExp(input[i], "g"))).length > 1){
    map.set(input[i], input.match(new RegExp(input[i], "g")).length)
    }
    if((input.match(new RegExp(input[i], "g"))).length == 1){
      map.set(input[i], 1)
    }

  }
  let map_asc = new Map([...map.entries()].sort());

  //console.log(mapAsc)
  to_return=[]
  for (const [k, v] of map_asc.entries()) {
    //console.log(k, v)
    var obj = {}
    obj[k]=v
    to_return.push(obj)
  }
  return to_return
}


module.exports = router;
