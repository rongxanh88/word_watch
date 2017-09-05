const topWordHTML = (data, status) => {
  const word = Object.getOwnPropertyNames(data.word)[0]
  const wordCount = data.word[word]
  
  $('.top-word h3')[0].innerHTML = `Top word from Word Watch API: ${word} (${wordCount})`
  $('.word-count').appendHTML
}

module.exports = { topWordHTML }