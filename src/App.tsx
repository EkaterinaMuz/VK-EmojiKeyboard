import EmojiBoard from 'components/emojiBoard/EmojiBoard';
import Container from 'components/container/Container';
import { MemoizedEmojiSelectProvider } from 'context/EmojiSelectContext';
import TextField from 'components/textField/TextField';


function App() {
  return (
    <MemoizedEmojiSelectProvider>
      <Container>
        <EmojiBoard />
        <TextField />
      </Container>
    </MemoizedEmojiSelectProvider>
  )
}

export default App;
