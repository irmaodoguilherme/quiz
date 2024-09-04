import { getUserScore, sumUserScore, resetUserScore } from './userScore.js'
import { sanitize } from './sanitize.js'


const getUserAnswers = (e, correctAnswers) => correctAnswers
  .map((_, index) => sanitize(e.target[`inputQuestion${++index}`].value))

const incrementUserScore = async e => {
  const correctAnswers = ['A', 'C', 'C', 'B']
  const userAnswers = getUserAnswers(e, correctAnswers)

  resetUserScore()
  userAnswers.forEach((answer, index) => {
    const isCorrectAnswer = answer === correctAnswers[index]

    if (isCorrectAnswer) {
      sumUserScore(25)
      return
    }
  })
}

const animateUserScore = () => {
  const scoreProgressBar =
    document.querySelector('[data-js="score-progress-bar"]')
  const userScoreEl =
    document.querySelector('[data-js="user-score"]').children[0]
  const userScore = getUserScore()
  let counter = 0

  const timer = setInterval(() => {
    if (counter === userScore) {
      clearInterval(timer)
    }

    userScoreEl.textContent = counter
    scoreProgressBar.value = counter
    ++counter
  }, 20)
}

const resetScreenPosition = () => scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
})

const showUserScore = () => {
  const userScoreContainer =
    document.querySelector('[data-js="user-score-container"]')
  const isUserScoreContainerHidden =
    userScoreContainer.classList.contains('is-hidden')

  if (isUserScoreContainerHidden) {
    userScoreContainer.classList.remove('is-hidden')
  }
}

export {
  showUserScore,
  resetScreenPosition,
  incrementUserScore,
  animateUserScore
}