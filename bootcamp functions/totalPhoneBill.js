export default function totalPhoneBill(phone) {
    var sumsung = phone.split(',');
    const sms = 0.65
    const call = 2.75
    let bill = 0
    for (var i=0;i<sumsung.length;i++) {
        const huawei = sumsung[i].trim();
     if (huawei === 'call') {
        bill = bill + call
     } else {bill = bill + sms}  
    }
    return 'R' + bill.toFixed(2)
}