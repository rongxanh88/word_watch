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

    
    //turn hash into array of keys, call each hash[key] to get value
    //append html with each key, and size is according to frequency of appearance
  })
})

// As a user  
// when I visit Word Watch  
// and paste a paragraph into the "Paste text here" textarea  
// and I click "Break down"  
// Then I should see text appear on the right side of the page  
// With each word from the paragraph only shown once  
// and the size of each word is relative to its frequency in the paragraph.