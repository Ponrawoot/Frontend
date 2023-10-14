import getHospital from "@/libs/getHospital";
import Image from "next/image";
export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalDetail = await getHospital(params.hid);

  /**
   * Mock Data for Demonstration Only
   */

  // const mockHospitalRepo = new Map();
  // mockHospitalRepo.set("001", {
  //   name: "Chulalongkorn Hospital",
  //   image: "/img/chula.jpg",
  // });
  // mockHospitalRepo.set("002", {
  //   name: "Rajavithi Hospital",
  //   image: "/img/rajavithi.jpg",
  // });
  // mockHospitalRepo.set("003", {
  //   name: "Thammasat University Hospital",
  //   image: "/img/thammasat.jpg",
  // });
  return (
    <main className="px-5">
      <h1 className="text-lg font-medium">
        Hospital Name: {hospitalDetail.data.name}
      </h1>
      <div className="flex flex-row my-5">
        <Image
          src={hospitalDetail.data.picture}
          alt="Hospital Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[40%] bg-black"
        />
        <div className="text-md mx-5 text-left">
          <div>Address: {hospitalDetail.data.address}</div>
          <div>Province: {hospitalDetail.data.province}</div>
          <div>Postalcode: {hospitalDetail.data.postalcode}</div>
          <div>Tel: {hospitalDetail.data.tel}</div>
        </div>
      </div>
    </main>
  );
}

// export async function generateStaticParams() {
//   return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
// }
