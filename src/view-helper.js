const Word = require('./models/word')

const displayTopWord = () => {
  Word.topWord()
    .then((data) => {
      const word = Object.getOwnPropertyNames(data.word)[0]
      const wordCount = data.word[word]
      
      $('.top-word h3')[0].innerHTML = `Top word from Word Watch API: ${word} (${wordCount})`
      $('.word-count').appendHTML
    })
}

const displayAnalyzedText = () => {
  const text = $('.text-submission textarea')[0].value
  const words = text.split(' ')
  
  let wordFrequency = {}
  
  words.forEach((word) => {
    word = word.toLowerCase()
    if (wordFrequency[word]) {
      wordFrequency[word] = wordFrequency[word] + 1
    } else {
      wordFrequency[word] = 1
    }
  })
  
  const wordFrequencyKeys = Object.keys(wordFrequency)
  
  wordFrequencyKeys.forEach((word) => {
    $('.word-count').append(
      `<span style="font-size: ${wordFrequency[word]}em">${word}&nbsp;</span>`
    )
    Word.post(word)
  })
}

module.exports = { displayTopWord, displayAnalyzedText }