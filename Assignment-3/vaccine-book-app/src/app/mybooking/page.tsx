"use client";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

export default function MyBooking() {
  const bookItem = useAppSelector((state) => state.bookSlice.bookItem);
  const dispatch = useDispatch<AppDispatch>();
  if (
    bookItem.firstName === "" &&
    bookItem.lastName === "" &&
    bookItem.nationalID === "" &&
    bookItem.hospital === "" &&
    bookItem.vaccinationDate === ""
  ) {
    return (
      <div className="m-10">
        <h1 className="text-xl"> No Vaccine Booking </h1>
      </div>
    );
  }

  return (
    <div className="m-20">
      <h1 className="mt-5 text-xl leading-6 text-gray-600">
        {" "}
        Booking Information{" "}
      </h1>
      <div className="my-8 bg-blue-100 p-8">
        <p> Firstname: {bookItem.firstName} </p>
        <p> Lastname: {bookItem.lastName} </p>
        <p> NationalID: {bookItem.nationalID} </p>
        <p> Hospital: {bookItem.hospital} </p>
        <p> Date: {bookItem.vaccinationDate} </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => dispatch(removeBooking(bookItem))}
      >
        {" "}
        Cancel Booking{" "}
      </button>
    </div>
  );
}
