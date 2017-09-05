const view = require('./view-helper')

const $submitBtn = $('.text-submission button')

view.displayTopWord()

$submitBtn.on('click', view.displayAnalyzedText)