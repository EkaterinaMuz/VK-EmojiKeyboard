import { useContext } from 'react';
import { Emoji } from 'types/Emoji';
import { useAppDispatch } from 'features/store'
import { EmojiSelectContext } from 'context/EmojiSelectContext';
import { EmojiContext } from 'types/Context';
import { addRecentEmoji } from './emojiSectionsSlice';
import styles from './EmojiSection.module.sass';

export default function EmojiSection({ title, items }: Emoji) {
  const dispatch = useAppDispatch()
  const { onEmojiClick } = useContext(EmojiSelectContext) as EmojiContext

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.sectionItems}>
        {
          items.map(item =>
            <button
              type='button'
              key={item}
              className={styles.item}
              onClick={() => { dispatch(addRecentEmoji(item)); onEmojiClick(item) }}>
              {item}
            </button>
          )
        }
      </div>
    </div>
  )
}