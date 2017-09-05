const view = require('./view-helper')

const baseUrl = 'https://wordwatch-api.herokuapp.com'
const topWordUrl = '/api/v1/top_word'

const $submitBtn = $('.text-submission button')

$.get(baseUrl + topWordUrl, view.topWordHTML)

$submitBtn.on('click', view.displayAnalyzedText)