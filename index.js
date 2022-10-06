import express from 'express';

import {longestWord, shortestWord, wordLength} from './bootcamp functions/word_game.js';
import usage from './bootcamp functions/totalPhoneBill.js';
import enoughAirtime from './bootcamp functions/enoughAirtime.js';

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


// app.get("https://lit-reaches-49756.herokuapp.com/api/price_plans", function(req, res){
  app.get("/api/totalPhoneBill", function(req, res){
  const bill = req.query.bill;
res.json({
 "usage" : usage(bill)
});
});


app.get("/api/enoughAirtime", function(req, res){
  const airtimeUsage = req.query.airtimeUsage;
  const amountAvailable = req.query.amountAvailable;
res.json({
 "airtimeR" : enoughAirtime(airtimeUsage, amountAvailable)    
});
});


const PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});