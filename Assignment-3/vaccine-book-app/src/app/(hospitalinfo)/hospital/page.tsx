import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
export default function Hospital() {
  const hospitals = getHospitals();
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
      </Suspense>
    </main>
  );
}
