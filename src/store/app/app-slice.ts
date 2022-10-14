import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialData } from '../../assets/data';
import { editRow, saveRow } from '../../assets/helpers';
import { InitialState, NewRowData, RowData } from '../../assets/types';

const initialState: InitialState = {
  data: initialData,
  isEditMode: true,
};

export const userSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setEditMode: (state, { payload }: PayloadAction<boolean>) => {
      state.isEditMode = payload;
    },

    createRow: (state, { payload }: PayloadAction<NewRowData>) => {
      const {changed} = saveRow(payload, state.data)
      state.data = changed;
    },

    editRow: (state, { payload }: PayloadAction<RowData>) => {
      const {changed} = editRow(payload, state.data)
      state.data = changed;
    },
  },
});

export const { reducer: userReducer, actions: {setEditMode} } = userSlice;
