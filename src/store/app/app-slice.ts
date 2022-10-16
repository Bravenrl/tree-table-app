import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialData } from '../../assets/data';
import { editRow, saveRow } from '../../assets/helpers';
import { InitialState, NewRowData, RowData } from '../../assets/types';

const initialState: InitialState = {
  data: initialData,
  isEditMode: true,
  maxLevel: 1,
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
    setMaxLevel: (state, { payload }: PayloadAction<number>) => {
      state.maxLevel = payload > state.maxLevel ? payload : state.maxLevel;
    },
  },
});

export const {
  reducer: userReducer,
  actions: { setEditMode, createRow, editCurrentRow, setMaxLevel },
} = userSlice;
