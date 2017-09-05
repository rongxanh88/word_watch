document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = 'https://wordwatch-api.herokuapp.com'
  const topWordUrl = '/api/v1/top_word'

  $.get(baseUrl + topWordUrl, function(data, status){
    const word = Object.getOwnPropertyNames(data.word)[0]
    const wordCount = data.word[word]

    $('.top-word h3')[0].innerHTML = `Top word from Word Watch API: ${word} (${wordCount})`
    $('.word-count').appendHTML
  });

  $('.text-submission button').on('click', () => {
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
      $('.word-count').append(`<span style="font-size: ${wordFrequency[word]}em">${word}&nbsp;</span>`)
    })

    wordFrequencyKeys.forEach((word) => {
      const postUrl = '/api/v1/words'
      $.post(baseUrl + postUrl, { "word": { "value": word }})
        .then((data) => {
          debugger
        })
      // /api/v1/words	{ word: { value: "sample" } }
      // $.post( "test.php", { name: "John", time: "2pm" } );
    })
  })
})

// For story 2,  
// each word should be sent via POST request  
// to the Word Watch API. See https://github.com/tmikeschu/wordwatch_api for details.