import { updateUserScore, resetUserScore } from './userScore.js'
import { getUserAnswers } from './getUserAnswers.js'

export const incrementUserScore = async e => {
  const correctAnswers = ['A', 'C', 'C', 'A']
  const userAnswers = getUserAnswers(e, correctAnswers)

  resetUserScore()
  userAnswers.forEach((answer, index) => {
    const isCorrectAnswer = answer === correctAnswers[index]

    if (isCorrectAnswer) {
      updateUserScore(25)
      return
    }
  })
}