// Write your code here.
const WinOrLoseCard = props => {
  const {score, back} = props
  const won = score === 12
  const backtoEmojis = () => {
    back(score)
  }
  return (
    <>
      <p>You {won ? 'Won' : 'Lose'}</p>
      <p>score</p>
      <p>{score}/12</p>
      <img
        src={
          won
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        alt="won"
      />
      <button type="button" onClick={backtoEmojis}>
        Play Again
      </button>
    </>
  )
}
export default WinOrLoseCard
