const view = require('./view-helper')
const baseUrl = 'https://wordwatch-api.herokuapp.com'

const topWordUrl = '/api/v1/top_word'

$.get(baseUrl + topWordUrl, view.topWordHTML)

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
        console.log(data)
      })
  })
})