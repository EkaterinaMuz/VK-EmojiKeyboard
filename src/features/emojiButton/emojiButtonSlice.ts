import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type ButtonSlice = {
    visible: boolean;
};

const initialState: ButtonSlice = {
    visible: false,
};
const emojiButtonSlice = createSlice({
    name: 'emojiButton',
    initialState,
    reducers: {
        showEmojiBoard(state) {
            state.visible = true;
        },

        hideEmojiBoard(state) {
            state.visible = false;
        },
    },
});

export const emojiButtonReducer = emojiButtonSlice.reducer;
export const { showEmojiBoard, hideEmojiBoard } = emojiButtonSlice.actions;
export const emojiButtonSelector = (state: RootState) =>
    state.emojiButton.visible;
