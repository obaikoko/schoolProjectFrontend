import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const getUserFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('User');
    return user ? JSON.parse(user) : null;
  }
  return null;
};
const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const register = createAsyncThunk(
  '/register',
  async (user, ThunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return ThunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk('/auth', async (user, ThunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return ThunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('/logout', async () => {
  return await authService.logout();
});
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
