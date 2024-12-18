
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  
import todoReducer from '../features/todosSlice';
import { api } from '../features/api'; 


const persistConfig = {
  key: 'root',
  storage,  
};

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {
    todo: persistedTodoReducer,  
    [api.reducerPath]: api.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),  
});

export const persistor = persistStore(store);
