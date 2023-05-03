import React, { createContext, memo, ReactNode, useCallback, useMemo, useRef, useState  } from "react";

type EmojiSelectProps = {
  children: ReactNode
}

export type EmojiContext = {
  inputRef: React.RefObject<HTMLTextAreaElement>;
  value: string;
  setValue: (value: string) => void;
  onEmojiClick: (arg: string) => void;
}

export const EmojiSelectContext = createContext<EmojiContext | null>(null);

export const MemoizedEmojiSelectProvider = memo(({ children }: EmojiSelectProps) => {

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const onEmojiClick = useCallback((chosenEmoji: string) => {
    if (inputRef?.current) {
      const cursor = inputRef.current.selectionStart;
      const message = value.slice(0, cursor) + chosenEmoji + value.slice(cursor);
      setValue(message);
      const newCursor = cursor + chosenEmoji.length
      setTimeout(() => inputRef.current?.setSelectionRange(newCursor, newCursor), 10)
      inputRef.current.focus()
    }

  }, [value])

  const props = useMemo(() => ({ value, setValue, inputRef, onEmojiClick }), [value, onEmojiClick]);
  
  return (
    <EmojiSelectContext.Provider value={props}>
      {children}
    </EmojiSelectContext.Provider>

  )
})




