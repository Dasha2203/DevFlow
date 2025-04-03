import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@api/types';

interface UserState {
  user: User | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setLoadingUser: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, logout, setLoadingUser } = userSlice.actions;
export default userSlice.reducer;
