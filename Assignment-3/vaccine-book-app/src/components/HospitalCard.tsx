"use client";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function HospitalCard({
  name,
  imgSrc,
  onReview,
  rating,
}: {
  name: string;
  imgSrc: string;
  onReview: Function;
  rating: number | null;
}) {
  const [value, setValue] = useState<number | null>(0);

  return (
    <InteractiveCard>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Hospital Picture"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[15%] p-[10px] text-black">{name}</div>
      <div
        className="w-full h-1/6 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setValue(newValue);
            onReview(name, newValue);
          }}
        />
      </div>
    </InteractiveCard>
  );
}
