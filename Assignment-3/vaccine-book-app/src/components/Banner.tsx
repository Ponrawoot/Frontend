import Image from "next/image";

export default function Banner() {
  return (
    <div className="p-5 m-0 w-screen h-[80vh] relative">
      <Image src={"/img/cover.jpg"} alt="cover" fill={true} objectFit="cover" />
      <div className="relative top-24 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h1 className="text-4xl font-extrabold text-orange-400">Get vaccinated today to protect yourself and your community.</h1>
        <h3 className="text-xl font-bold text-orange-400">Together, we can beat this pandemic.</h3>
      </div>
    </div>
  );
}