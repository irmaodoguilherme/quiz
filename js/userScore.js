let userScore = 0

const getUserScore = () => userScore
const updateUserScore = value => userScore += value
const resetUserScore = () => userScore = 0

export { getUserScore, updateUserScore, resetUserScore }