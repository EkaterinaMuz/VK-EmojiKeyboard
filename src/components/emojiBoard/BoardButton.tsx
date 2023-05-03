import { useAppDispatch } from 'features/store'
import { sectionSwitcherSelector, setActive } from 'features/sectionsSwitcher/sectionSwitcherSlice'
import { useSelector } from 'react-redux'
import styles from './EmojiBoard.module.sass'
import { ReactComponent as AllEmoji } from '../../assets/icon-input.svg'
import { ReactComponent as RecentEmoji } from '../../assets/icon-recent.svg'

interface BoardButtonInterface {
    icon: string
}

export default function BoardButton({ icon }: BoardButtonInterface) {
    const dispatch = useAppDispatch();
    const isActive = useSelector(sectionSwitcherSelector);
    return (
        <button
            type='button'
            className={`${styles.boardButton} ${isActive === icon && styles.buttonActive}`}
            onClick={() => dispatch(setActive(icon))}>
            {
                icon === 'all' ? <AllEmoji /> : <RecentEmoji />
            }
        </button>
    )
}
