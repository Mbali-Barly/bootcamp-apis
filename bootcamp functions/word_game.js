export default function longestWord(puzzle) {
    let tsholo = puzzle.split(' ');
    var theLongestWord = 0;
    for (var i=0;i<tsholo.length;i++) {
      let mbali = tsholo[i].length;
    //  console.log(mbali)
      
    if (mbali >= theLongestWord) 
     {theLongestWord = mbali;
     var shad = tsholo[i]}
      
      //  console.log(theLongestWord)
    }
    // console.log(shad)
     return shad
   }
   
  //   export default function shortestWord(puzzle) {
  //   let tsholo = puzzle.split(' ');
  //     var theShortestWord = tsholo[0];
     
  //     for (var i=0;i<tsholo.length;i++) {
  //     let mbali = tsholo[i].length;
        
  //     if (mbali <= theShortestWord.length) 
  //    {theShortestWord = tsholo[i];}  
  //   }
  //    return theShortestWord;
  //  }
   
  //  export default function wordLengths(puzzle) {
  //   var tsholo = puzzle.split(' ');
  //  var thewordLengths = tsholo.map(a => a.length);
  //    let total = 0;
  //    for (var i=0;i<thewordLengths.length;i++) {
  //      total += thewordLengths[i]
  //    }
  //    return total;
  //  }
     
   