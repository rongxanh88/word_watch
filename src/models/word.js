const baseUrl = 'https://wordwatch-api.herokuapp.com'

class Word {
  static topWord() {
    const topWordUrl = '/api/v1/top_word'
    return $.get(baseUrl + topWordUrl)
      .then((data) => {
        return data
      })
  }

  static post(word) {
    const postUrl = '/api/v1/words'
    $.post(baseUrl + postUrl, { "word": { "value": word }})
      .then((data) => {
        console.log(data)
      })
  }
}

module.exports = Word