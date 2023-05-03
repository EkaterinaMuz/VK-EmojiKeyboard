import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { emojiButtonSelector, hideEmojiBoard, showEmojiBoard } from 'features/emojiButton/emojiButtonSlice';
import { useAppDispatch } from 'features/store';
import EmojiSections from 'features/emojiSections/EmojiSections';
import { fetchingEmoji } from 'features/emojiSections/emojiSectionsSlice';
import styles from './EmojiBoard.module.sass';
import BoardButton from './BoardButton';

export default function EmojiBoard() {
    const visible = useSelector(emojiButtonSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchingEmoji())
    }, [dispatch]);

    return (
        <div
            className={`${styles.emojiBoardWrapper} ${visible ? styles.show : styles.hide}`}
            onMouseEnter={() => dispatch(showEmojiBoard())}
            onMouseLeave={() => dispatch(hideEmojiBoard())}
        >
            <div className={styles.emojiBoard}>
                <div className={styles.emojiKeyboard}>
                    <EmojiSections />
                </div>
                <div className={styles.emojiFooter}>
                    <div className={styles.buttonWrapper}>
                        <BoardButton icon='all' />
                        <BoardButton icon='recent' />
                    </div>
                </div>
            </div>
        </div>
    )
}
