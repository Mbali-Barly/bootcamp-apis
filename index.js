import express from 'express';

import longestWord from './bootcamp functions/word_game.js';
import shortestWord from './bootcamp functions/word_game.js';
import wordLength from './bootcamp functions/word_game.js';
import usage from './bootcamp functions/totalPhoneBill.js';

const app = express();

app.use(express.static('public'));

app.get("/api/word_game", function(req, res){
    const sentence = req.query.sentence;
  res.json({
   "longestWord" : longestWord(sentence),
   "shortestWord" : shortestWord(sentence),
   "wordLength" : wordLength(sentence)
  });
});

app.get("/api/totalPhoneBill", function(req, res){
  const bill = req.query.bill;
res.json({
 "usage" : usage(bill)
});
});

let PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});