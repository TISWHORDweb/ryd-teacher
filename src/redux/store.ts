
// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
// import myReducer from './myReducer';

const store = configureStore({
  reducer: {
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;