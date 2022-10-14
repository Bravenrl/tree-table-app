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
        saveRow(payload, state.data);
    },

    editCurrentRow: (state, { payload }: PayloadAction<RowData>) => {
      editRow(payload, state.data);
    },
  },
});

export const {
  reducer: userReducer,
  actions: { setEditMode, createRow, editCurrentRow },
} = userSlice;
