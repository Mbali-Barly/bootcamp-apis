// document.addEventListener('alpine:init', () => {
//     Alpine.data('dataForEnoughAirtime', function () {
//         return {
//             airtimeUsage : '',
//             amountAvailable : '',
//             airtimeMessage : '',
        
//             calculate() {
//                 this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.amountAvailable);
//             }
            
//         }
//     })
// })

document.addEventListener('alpine:init', () => {
    Alpine.data('dataForEnoughAirtime', function () {
        return {
            airtimeUsage : '',
            amountAvailable : '',
            airtimeMessage : '',
        
            calculate() {
                this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.amountAvailable);
        
                setTimeout(() => {
                    this.airtimeMessage = '';
                }, 5000);
            }
          
        }
    })
})