export default function enoughAirtime(projectedUsage, amountOfAirtime) {
    const tsholo = projectedUsage.split(',');
    let sms = 0.75
    let calls = 1.88
    let data = 12
    var bill = 0
    for (var i=0;i<tsholo.length;i++) {
      const mbali = tsholo[i].trim();
     
   if (mbali === 'call') {
    bill = bill + calls;
  } else if (mbali === 'sms') {
    bill = bill + sms;
  } else 
    bill = bill + data;
  }
    // console.log(bill)
    let shad = amountOfAirtime - bill;
    // console.log(amountOfAirtime)
    if (amountOfAirtime>bill) {
      return 'R' + shad.toFixed(2); }
    else return 'R0.00';
  }


  