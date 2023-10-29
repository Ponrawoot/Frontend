"use client";
import { useState } from "react";
import { addBooking } from "@/redux/features/bookSlice";
import dayjs, { Dayjs } from "dayjs";
import { BookingItem } from "../../interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Select, MenuItem, Link } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Form() {
  const dispatch = useDispatch<AppDispatch>();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [nationalID, setNationalID] = useState<string>("");
  const [hospital, setHospital] = useState<string>("");
  const [vaccinationDate, setVaccinationDate] = useState<Dayjs | null>(null);

  const makeReservation = () => {
    if (
      firstName &&
      lastName &&
      nationalID &&
      hospital &&
      dayjs(vaccinationDate).format("DD/MM/YYYY")
    ) {
      const booking: BookingItem = {
        firstName: firstName,
        lastName: lastName,
        nationalID: nationalID,
        hospital: hospital,
        vaccinationDate: dayjs(vaccinationDate).format("DD/MM/YYYY"),
      };
      dispatch(addBooking(booking));
    } else {
      alert("Please fill in all information");
    }
  };
  return (
    <div>
      <div className="text-xl font-medium text-black my-4">
        New Vaccine Reservation
      </div>
      <div className="w-fit space-y-5">
        <div className="text-md text-left text-gray-600">First name</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          placeholder="Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <div className="text-md text-left text-gray-600">Last name</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          placeholder="Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <div className="text-md text-left text-gray-600">ID Number</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ID Number"
          type="text"
          placeholder="ID Number"
          value={nationalID}
          onChange={(e) => setNationalID(e.target.value)}
        />

        <div className="text-md text-left text-gray-600">
          Select Date and Location
        </div>
        <div
          className="bg-slate-100 rounded-lg space-x-5 space-y-2 
        w-fit px-10 py-5 flex flex-row justify-center"
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="bg-white"
              value={vaccinationDate}
              onChange={(newValue) => setVaccinationDate(newValue)}
            />
          </LocalizationProvider>
          <Select
            variant="standard"
            name="location"
            id="location"
            className="h-[2em] w-[200px]"
            defaultValue={""}
            onChange={(e) => setHospital(e.target.value)}
          >
            <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
            <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
            <MenuItem value="Thammasat University Hospital">
              Thammasat University Hospital
            </MenuItem>
          </Select>
        </div>
      </div>
      <button
        type="submit"
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm my-4"
        onClick={makeReservation}
      >
        Confirm Booking
      </button>
    </div>
  );
}
