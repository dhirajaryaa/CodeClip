import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isProfileSettingsOpen: false,
    isDarkMode: false,
  },
  reducers: {
    toggleProfileSettings: (state) => {
      state.isProfileSettingsOpen = !state.isProfileSettingsOpen;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    closeProfileSettings: (state) => {
      state.isProfileSettingsOpen = false;
    },
    openProfileSettings: (state) => {
      state.isProfileSettingsOpen = true;
    },
  },
});

export const { toggleProfileSettings, toggleDarkMode, closeProfileSettings, openProfileSettings } = uiSlice.actions;

export default uiSlice.reducer;
