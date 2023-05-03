import EmojiButton from 'features/emojiButton/EmojiButton';
import { useEffect, useContext } from 'react';
import { EmojiSelectContext } from 'context/EmojiSelectContext';
import { EmojiContext } from 'types/Context';
import styles from './TextField.module.sass';


export default function TextField() {

  const { value, setValue, inputRef } = useContext(EmojiSelectContext) as EmojiContext

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.style.height = "36px";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }

  }, [value, inputRef])

  return (
    <form>
      <div className={styles.inputWrapper}>
        <textarea
          id='input'
          className={styles.textField}
          placeholder='Ваше сообщение'
          name='message'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          ref={inputRef}
        />
        <EmojiButton />
      </div>
    </form>
  )
}
