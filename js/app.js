const quizForm = document.querySelector('[data-js="quiz-form"]')

const handleFormSubmit = async e => {
  e.preventDefault()

  const {
    showUserScore,
    resetScreenPosition,
    incrementUserScore,
    animateUserScore
  } = await import('./handleUserScore.js')

  showUserScore()
  resetScreenPosition()
  incrementUserScore(e)
  animateUserScore()
}

quizForm.addEventListener('submit', handleFormSubmit)