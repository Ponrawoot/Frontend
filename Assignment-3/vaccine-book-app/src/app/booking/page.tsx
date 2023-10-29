import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import Form from "@/components/Form";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <main className="pl-10 py-10 space-y-5">
      {session ? (
        <>
          <div className="text-3xl"> User Information </div>
          <div>
            <div> Name: {profile.data.name} </div>
            <div> Email: {profile.data.email} </div>
            <div> Tel.: {profile.data.tel} </div>
            <div> Member Since: {createdAt.toString()} </div>
          </div>
          <Form />
        </>
      ) : null}
    </main>
  );
}
