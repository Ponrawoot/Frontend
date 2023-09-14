"use client"
import { useReducer, useState} from "react";
import HospitalCard from "./HospitalCard";

export default function CardPanel() {

    const [hospitalRatings, setHospitalRatings] = useState<{
        [hospitalName: string]: number | null;
      }>({});

  const reviewReducer = (
    reviewMap: Map<string, number | null>,
    action: { type: string; hospitalName: string; rating: number | null }
  ) => {
    if (action.rating == null) {
      action.rating = 0;
    }
    switch (action.type) {
      case "add": {
        const newReviewMap = new Map(reviewMap)
        newReviewMap.set(action.hospitalName, action.rating);
        return newReviewMap;
      }
      case "remove": {
        const newReviewMap = new Map(reviewMap)
        newReviewMap.delete(action.hospitalName);
        return newReviewMap
      }
      default:
        return reviewMap;
    }
  };
  let initialM = new Map<string, number | null>();
  initialM.set("Chulalongkorn Hospital", 0);
  initialM.set("Rajavithi Hospital", 0);
  initialM.set("Thammasat University HospitalChulalongkorn Hospital", 0);
  const [allReviews, dispatchCompare] = useReducer(reviewReducer, initialM);

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
      <HospitalCard
        name="Chulalongkorn Hospital"
        imgSrc="/img/chula.jpg"
        onReview={(name: string, rating: number) =>
          dispatchCompare({ type: "add", hospitalName: name, rating: rating })
        }
        rating={allReviews.get("Chulalongkorn Hospital") ?? 0}
      />
      <HospitalCard
        name="Rajavithi Hospital"
        imgSrc="/img/rajavithi.jpg"
        onReview={(name: string, rating: number) =>
          dispatchCompare({ type: "add", hospitalName: name, rating: rating })
        }
        rating={allReviews.get("Rajavithi Hospital") ?? 0}
      />
      <HospitalCard
        name="Thammasat University Hospital"
        imgSrc="/img/thammasat.jpg"
        onReview={(name: string, rating: number) =>
          dispatchCompare({ type: "add", hospitalName: name, rating: rating })
        }
        rating={allReviews.get("Thammasat University Hospital") ?? 0}
      />
    </div>
    <div className="px-10">
    <div className="w-full text-xl font-medium text-black">
          Review 
        </div>
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
