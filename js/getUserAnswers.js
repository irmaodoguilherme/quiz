export const getUserAnswers = (e, correctAnswers) => correctAnswers
  .map((_, index) => e.target[`inputQuestion${++index}`].value)