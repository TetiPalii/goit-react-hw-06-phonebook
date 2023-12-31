import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        // console.log(state);
        // console.log(action);
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        // console.log(name, number);
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContacts(state, action) {
      const index = state.contacts.findIndex(contact => {
        return contact.id === action.payload;
      });
      state.contacts.splice(index, 1);
    },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// export const contactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
