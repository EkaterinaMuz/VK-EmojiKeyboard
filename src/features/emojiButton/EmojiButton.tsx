import { useSelector } from 'react-redux';
import { useAppDispatch } from 'features/store';
import { emojiButtonSelector, hideEmojiBoard, showEmojiBoard } from './emojiButtonSlice';
import { ReactComponent as InputIcon } from '../../assets/icon-input.svg';
import styles from './EmojiButton.module.sass';

export default function EmojiButton() {

  const dispatch = useAppDispatch();
  const visible = useSelector(emojiButtonSelector);
  return (
    <button
      type='button'
      className={`${styles.button} ${visible ? styles.button_focus : styles.button_blur}`}
      onMouseEnter={() => dispatch(showEmojiBoard())}
      onMouseLeave={() => dispatch(hideEmojiBoard())}>
      <InputIcon />
    </button>
  )
}
