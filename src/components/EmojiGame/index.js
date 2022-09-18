/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
// Write your code here.
class EmojiGame extends Component {
  state: {
    isGameOver: false,
    score: 0,
    topScore: 0,
    listOfIds: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  back = score => {
    const {topScore} = this.state
    let top = topScore
    if (score > topScore) {
      top = score
    }
    this.setState({isGameOver: false, score: 0, topScore: top})
  }

  emojiClick = id => {
    const {listOfIds} = this.state
    if (listOfIds.includes(id)) {
      this.setState({isGameOver: true, listOfIds: []})
    } else {
      this.setState(
        prevState => ({
          score: prevState.score + 1,
          listOfIds: [...prevState.listOfIds, id],
        }),
        this.shuffledEmojisList(),
      )
    }
  }

  emojiView = () => {
    const {emojisList} = this.props
    console.log(emojisList)
    return (
      <ul>
        {emojisList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            emojiClick={this.emojiClick}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, isGameOver, topScore} = this.state

    return (
      <>
        <NavBar score={score} isGameOver={isGameOver} topScore={topScore} />
        {isGameOver ? (
          <WinOrLoseCard score={score} back={this.back} />
        ) : (
          this.emojiView()
        )}
      </>
    )
  }
}
export default EmojiGame
