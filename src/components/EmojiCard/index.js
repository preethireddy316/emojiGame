// Write your code here.
const EmojiCard = props => {
  const {emojiDetails, emojiClick} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const shuffling = () => {
    emojiClick(id)
  }
  return (
    <li>
      <button type="button" onClick={shuffling}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
