// Write your code here.
const NavBar = props => {
  const {score, isGameOver, topScore} = props
  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h1>Emoji Game</h1>
      {isGameOver && (
        <>
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </>
      )}
    </nav>
  )
}
export default NavBar
