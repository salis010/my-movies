import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUI {
  currentPage: string
}

export const uiInitialState: IUI = {
  currentPage: '/'
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => { state.currentPage = action.payload }
  }
})

export const {
  setCurrentPage
} = uiSlice.actions

export const ui = uiSlice.reducer
