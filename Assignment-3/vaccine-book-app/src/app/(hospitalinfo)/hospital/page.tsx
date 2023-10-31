import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import getUserProfile from "@/libs/getUserProfile";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
export default async function Hospital() {
  const hospitals = getHospitals();

  const session = await getServerSession(authOptions);

  let profile = null;
  if (session) {
    profile = await getUserProfile(session.user.token);
  }

  return (
    <main className="text-center p-5">
      <Suspense
        fallback={
          <p>
            Loading... <LinearProgress />{" "}
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
        {profile?.data?.role == "admin" ? <AddHospitalForm /> : null}
      </Suspense>
    </main>
  );
}
