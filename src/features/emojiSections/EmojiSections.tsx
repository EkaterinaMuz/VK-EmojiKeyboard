import { useSelector } from 'react-redux';
import { sectionSwitcherSelector } from 'features/sectionsSwitcher/sectionSwitcherSlice';
import { emojiSectionsSelector } from './emojiSectionsSlice'
import EmojiSection from './EmojiSection';


export default function EmojiSections() {
  const { allEmoji, recentEmoji } = useSelector(emojiSectionsSelector);
  const isActive = useSelector(sectionSwitcherSelector);

  return (
    <div>
      {isActive === 'all' ? (allEmoji.map(item =>

        <EmojiSection
          title={item.title}
          items={item.items}
        />
      )
      ) : (
        <EmojiSection
          title='Недавние'
          items={recentEmoji}
        />

      )}
    </div>

  )
}
