"use client";
import { useReducer, useState } from "react";
import HospitalCard from "./HospitalCard";
import Link from "next/link";

export default function CardPanel() {
  const reviewReducer = (
    reviewMap: Map<string, number | null>,
    action: { type: string; hospitalName: string; rating: number | null }
  ) => {
    if (action.rating == null) {
      action.rating = 0;
    }
    switch (action.type) {
      case "add": {
        const newReviewMap = new Map(reviewMap);
        newReviewMap.set(action.hospitalName, action.rating);
        return newReviewMap;
      }
      case "remove": {
        const newReviewMap = new Map(reviewMap);
        newReviewMap.delete(action.hospitalName);
        return newReviewMap;
      }
      default:
        return reviewMap;
    }
  };
  let initialM = new Map<string, number | null>();
  initialM.set("Chulalongkorn Hospital", 0);
  initialM.set("Rajavithi Hospital", 0);
  initialM.set("Thammasat University Hospital", 0);
  const [allReviews, dispatchCompare] = useReducer(reviewReducer, initialM);

  /**
   *  Mock Data for Demonstration Only
   */
  const mockHospitalRepo = [
    { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      image: "/img/thammasat.jpg",
    },
  ];

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {mockHospitalRepo.map((hospitalItem) => (
          <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
          <HospitalCard
            name={hospitalItem.name}
            imgSrc={hospitalItem.image}
            rating={allReviews.get(hospitalItem.name) ?? 0}
            onReview={(name: string, rating: number) =>
              dispatchCompare({
                type: "add",
                hospitalName: name,
                rating: rating,
              })
            }
          />
          </Link>
        ))}
      </div>
      <div className="px-10">
        <div className="w-full text-xl font-medium text-black">Review</div>
        {Array.from(allReviews.entries()).map(([name, rating]) => (
          <div
            className="text-black"
            key={name}
            onClick={() =>
              dispatchCompare({
                type: "remove",
                hospitalName: name,
                rating: rating,
              })
            }
          >
            {name} : Rating = {rating}
          </div>
        ))}
      </div>
    </div>
  );
}
