import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'features/store';

type SwitcherSlice = {
    active: 'all' | 'recent';
};

const initialState: SwitcherSlice = {
    active: 'all',
};

const sectionSwitcherSlice = createSlice({
    name: 'sectionSwitcher',
    initialState,
    reducers: {
        setActive(state, { payload }) {
            state.active = payload;
        },
    },
});

export const sectionSwitcherReducer = sectionSwitcherSlice.reducer;
export const { setActive } = sectionSwitcherSlice.actions;
export const sectionSwitcherSelector = (state: RootState) =>
    state.sectionSwitcher.active;
