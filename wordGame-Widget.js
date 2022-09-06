document.addEventListener('alpine:init', () => {
    Alpine.data('dataForWordGame', function() {
        return {
            init() {
 
            },
            
            sentence : '',
            longestWord:'',
            shortestWord: '',
            wordLength: '',

            checkSentence() {
                axios
                   .get(`/api/word_game?sentence=${this.sentence}`)
                   .then((result) => {

                    this.longestWord = result.data.longestWord;
                   console.log(result.data)
                   })
            } 
        }
    })
})