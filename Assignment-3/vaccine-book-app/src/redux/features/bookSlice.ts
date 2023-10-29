import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
  bookItem: BookingItem;
};

const initialState: BookingState = {
  bookItem: {
    firstName: "",
    lastName: "",
    nationalID: "",
    hospital: "",
    vaccinationDate: "",
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      state.bookItem.firstName = action.payload.firstName;
      state.bookItem.lastName = action.payload.lastName;
      state.bookItem.nationalID = action.payload.nationalID;
      state.bookItem.hospital = action.payload.hospital;
      state.bookItem.vaccinationDate = action.payload.vaccinationDate;
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      state.bookItem.firstName = "";
      state.bookItem.lastName = "";
      state.bookItem.nationalID = "";
      state.bookItem.hospital = "";
      state.bookItem.vaccinationDate = "";
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
