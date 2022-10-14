import { createSelector } from '@reduxjs/toolkit';
import { RowData } from '../../assets/types';
import { dataToTree } from '../../assets/utils';
import { TypeRootState } from '../root-reducer';

export const getData = (state: TypeRootState): RowData[] => state.App.data;
export const getIsEditMode = (state: TypeRootState): boolean => state.App.isEditMode;

export const getTreeData = createSelector(getData, dataToTree);


