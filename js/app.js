const quizForm = document.querySelector('[data-js="quiz-form"]')

const handleFormSubmit = async e => {
  e.preventDefault()

  const { incrementUserScore } = await import('./incrementUserScore.js')
  const { animateUserScore } = await import('./animateUserScore.js')
  const { resetScreenPosition } = await import('./resetScreenPosition.js')
  const { showUserScoreContainer } = await import('./showUserScoreContainer.js')

  showUserScoreContainer()
  resetScreenPosition()
  incrementUserScore(e)
  animateUserScore()
}

quizForm.addEventListener('submit', handleFormSubmit)