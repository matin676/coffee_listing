import React from "react";

import { starFill, star } from "../assets";

export default function CoffeeCard(props) {
  return (
    <div className="bg-shark w-72 h-[20rem] rounded-xl m-5 hover:cursor-pointer relative">
      {props.popular ? (
        <p className="text-xs bg-creamCan text-shark font-semibold w-fit p-1 pl-3 pr-3 rounded-full absolute top-2 left-2 z-10">
          Popular
        </p>
      ) : (
        ""
      )}
      <img src={props.image} alt="coffee" className="w-72 h-48 rounded-xl" />
      <div className="p-5 pl-0 pr-0">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">{props.name}</p>
          <button className="bg-skeptic text-black font-semibold text-base p-3 pt-1 pb-1 rounded-md">
            {props.price}
          </button>
        </div>
        <div className="text-lg mt-4 flex justify-between">
          <div className="flex">
            <img
              src={props.rating == null ? `${star}` : `${starFill}`}
              alt="star"
            />
            <span className="ml-1">{props.rating}</span>
            <span className="text-paleSky font-medium ml-1">
              {props.votes === 0 ? "No ratings" : `(${props.votes} votes)`}
            </span>
          </div>
          <p className="text-burntSienna">
            {props.available ? "" : "Sold out"}
          </p>
        </div>
      </div>
    </div>
  );
}
