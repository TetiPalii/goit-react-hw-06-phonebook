import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
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

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
