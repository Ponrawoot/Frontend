"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Banner() {
  const covers = [
    "/img/cover1.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter()
  return (
    <div
      className="p-5 m-0 w-screen h-[80vh] relative"
      onClick={() => {
        setIndex(index + 1);
      }}
    >
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        objectFit="cover"
      />
      <div className="relative top-24 left-1/2 transform -translate-x-1/2 z-20 text-center bg-white rounded-full">
        <h1 className="text-4xl font-extrabold text-blue-800">
          Get vaccinated today to protect yourself and your community.
        </h1>
        <h3 className="text-xl font-bold text-blue-800">
          Together, we can beat this pandemic.
        </h3>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="absolute bottom-0 right-0 h-16 w-auto">
                <button className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded z-20"
                onClick={(e) => {e.stopPropagation(); router.push('/hospital')}}>
                    Check Hospital List
                </button>
            </div>
    </div>
  );
}
