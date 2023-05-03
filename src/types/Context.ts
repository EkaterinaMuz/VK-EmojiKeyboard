import React from "react";

export type EmojiContext = {
    inputRef: React.RefObject<HTMLTextAreaElement>;
    value: string;
    setValue: (value: string) => void;
    onEmojiClick: (arg: string) => void;
  }