document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = 'https://wordwatch-api.herokuapp.com'
  const topWordUrl = '/api/v1/top_word'

  $.get(baseUrl + topWordUrl, function(data, status){
    const word = Object.getOwnPropertyNames(data.word)[0]
    const wordCount = data.word[word]

    $('.top-word h3')[0].innerHTML = `Top word from Word Watch API: ${word} (${wordCount})`
    $('.word-count').appendHTML
  });
})