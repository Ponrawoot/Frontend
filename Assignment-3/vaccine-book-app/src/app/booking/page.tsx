import LocationDateReserve from "@/components/LocationDateReserve";
export default function Booking() {
  return (
    <main className="pl-10 py-10 space-y-5">
      <div className="text-xl font-medium text-black">
        New Vaccine Reservation
      </div>
      <div className="w-fit space-y-5">
        <div className="text-md text-left text-gray-600">Name</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          placeholder="Name"
        />
        <div className="text-md text-left text-gray-600">ID Number</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ID Number"
          type="text"
          placeholder="ID Number"
        />
        <div className="text-md text-left text-gray-600">
          Select Date and Location
        </div>
        <LocationDateReserve />
      </div>
      <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
        Check Availability
      </button>
    </main>
  );
}
