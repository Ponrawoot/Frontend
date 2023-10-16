import LocationDateReserve from "@/components/LocationDateReserve";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {

  
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
    
    <main className="pl-10 py-10 space-y-5">
      {session?
            <>
                <div className='text-3xl'> User Information </div>
                <div>
                    <div> Name: {profile.data.name} </div>
                    <div> Email: {profile.data.email} </div>
                    <div> Tel.: {profile.data.tel} </div>
                    <div> Member Since: {createdAt.toString()} </div>
                </div>
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
            </>
            : null}
            <br></br>
      
    </main>
  );
      }
      
