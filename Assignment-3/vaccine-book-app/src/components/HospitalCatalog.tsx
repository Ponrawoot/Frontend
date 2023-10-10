"use client";
import { useReducer } from "react";
import HospitalCard from "./HospitalCard";
import Link from "next/link";
export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: Object;
}) {
  const reviewReducer = (
    state: Map<string, number | null>,
    action: { type: string; hospitalName: string; rating: number | null }
  ) => {
    if (action.rating == null) {
      action.rating = 0;
    }
    switch (action.type) {
      case "add":
        const newStateAdd = new Map(state);
        newStateAdd.set(action.hospitalName, action.rating);
        return newStateAdd;
      case "remove":
        const newStateRemove = new Map(state);
        newStateRemove.delete(action.hospitalName);
        return newStateRemove;
      default:
        return state;
    }
  };
  let initialM = new Map<string, number | null>();
  const [allReviews, dispatchReview] = useReducer(reviewReducer, initialM);

  const hospitalJsonReady = await hospitalJson;
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-auto h-auto bg-slate-100 shadow-md rounded-lg p-4 m-5 content-center">
          <h1 className="text-center font-bold text-3xl mt-3">
            Total Hospital: {hospitalJsonReady.count}
          </h1>
        </div>
      </div>
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
        {hospitalJsonReady.data.map((hospitalItem: Object) => (
          <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
            <HospitalCard
              name={hospitalItem.name}
              imgSrc={hospitalItem.picture}
              rating={allReviews.get(hospitalItem.name) ?? 0}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="w-full text-xl font-medium text-black">Review</div>
        {Array.from(allReviews.entries()).map(([name, rating]) => (
          <div
            className="text-black"
            key={name}
            onClick={() =>
              dispatchReview({
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
