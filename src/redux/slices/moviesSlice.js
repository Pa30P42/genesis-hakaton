import { createSlice } from '@reduxjs/toolkit';
// import { batch } from 'react-redux';
// import getTransactions from 'API/getTransactions';
// import { ITxsState } from '@/interfaces/TransactionState.interface';

const initialState = {
  movies: [],
  activePage: 1,
  totalPages: 0,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setTransactions: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

// export const updateMovies = () => async (dispatch, getState) => {
//   //   const { clientAddress } = getState().app;
//   // const { transactionsCurrency, activePage } = getState().transactions;

//   if (clientAddress) {
//     const transactions = await getTransactions(
//       activePage,
//       Number(process.env.TRANSACTION_PER_PAGE),
//       clientAddress,
//       transactionsCurrency,
//     );

//     if (transactions) {
//       batch(() => {
//         dispatch(setTotalPages(transactions.totalPages));
//         dispatch(setTransactions(transactions.data));
//       });
//     }
//   }
// };
