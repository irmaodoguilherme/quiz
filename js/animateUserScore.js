import { getUserScore } from './userScore.js'

export const animateUserScore = () => {
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