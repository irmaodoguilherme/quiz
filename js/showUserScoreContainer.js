export const showUserScoreContainer = () => {
  const userScoreContainer =
    document.querySelector('[data-js="user-score-container"]')
  const isUserScoreContainerHidden =
    userScoreContainer.classList.contains('is-hidden')

  if (isUserScoreContainerHidden) {
    userScoreContainer.classList.remove('is-hidden')
  }
}