const view = require('./view-helper')

const $submitBtn = $('.text-submission button')

view.displayTopWord()

$submitBtn.on('click', view.displayAnalyzedText)

$(document).keypress((key) => {
  if (key.which == 13) {
      view.displayAnalyzedText()
  }
})