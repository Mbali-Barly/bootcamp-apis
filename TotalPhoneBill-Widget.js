document.addEventListener('alpine:init', () => {
    Alpine.data('dataForPhoneBill',function () {
        return {
            bill : '',
            usage : '',
    
            totalUsage () {
                this.bill = totalPhoneBill(this.usage);
    
                setTimeout(() => {
                    this.bill = '';
                    }, 5000);
            }
        }
    })
})