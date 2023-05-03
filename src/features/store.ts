import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { emojiButtonReducer } from './emojiButton/emojiButtonSlice';
import { emojiSectionsReducer } from './emojiSections/emojiSectionsSlice';
import { sectionSwitcherReducer } from './sectionsSwitcher/sectionSwitcherSlice';

const rootReducer = combineReducers({
    emojiButton: emojiButtonReducer,
    emojiSections: emojiSectionsReducer,
    sectionSwitcher: sectionSwitcherReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
