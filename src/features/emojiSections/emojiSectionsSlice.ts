import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'features/store';
import { Emoji } from '../../types/Emoji';

export const fetchingEmoji = createAsyncThunk<
    Emoji[],
    undefined,
    { rejectValue: string }
>('emoji/fetching', async (_, { rejectWithValue }) => {
    try {
        const res = await fetch('./sections.json');
        return await res.json();
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue('Unknown Error!');
    }
});

type emojiSectionsProps = {
    allEmoji: Emoji[];
    recentEmoji: string[];
    chosenEmoji: string;
    errors: null | string;
};

const initialState: emojiSectionsProps = {
    allEmoji: [],
    recentEmoji: [],
    chosenEmoji: '',
    errors: null,
};

const emojiSectionsSlice = createSlice({
    name: 'emojiSections',
    initialState,
    reducers: {
        addRecentEmoji(state, { payload }) {
            if (
                !state.recentEmoji.includes(payload) &&
                state.recentEmoji.length > 25
            ) {
                state.recentEmoji.shift();
                state.recentEmoji.push(payload);
            }
            if (!state.recentEmoji.includes(payload)) {
                state.recentEmoji.push(payload);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchingEmoji.fulfilled, (state, action) => {
                state.allEmoji = action.payload;
                state.errors = null;
            })
            .addCase(fetchingEmoji.rejected, (state, action) => {
                state.errors = action.payload || 'Unknown error!';
            });
    },
});

export const emojiSectionsReducer = emojiSectionsSlice.reducer;
export const { addRecentEmoji } = emojiSectionsSlice.actions;
export const emojiSectionsSelector = (state: RootState) => state.emojiSections;
