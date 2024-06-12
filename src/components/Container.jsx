import React, { useEffect, useState } from "react";
import axios from "axios";

import { vector } from "../assets";
import CoffeeCard from "./CoffeeCard";

const baseURL =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

export default function Container() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  const filteredData =
    filter === "available" ? data.filter((item) => item.available) : data;

  return (
    <div className="bg-shark w-auto flex flex-col flex-wrap justify-center items-center ml-20 mr-20 -mt-[12rem] max-md:-mt-[4rem] mb-[10rem] rounded-xl pt-20 pb-20 relative z-50">
      <span>
        <p className="font-semibold text-5xl">Our Collection</p>
        <img
          src={vector}
          alt="line vector"
          className="-translate-y-24 translate-x-24 relative -z-10"
        />
      </span>
      <p className="text-center max-md:text-justify text-xl pl-20 pr-20 -mt-32 text-paleSky font-medium">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="flex mt-5">
        <a
          href="#"
          onClick={() => setFilter("all")}
          className={`p-2 pl-3 pr-3 mr-2 rounded-lg text-xl ${
            filter === "all" ? "bg-paleSky" : "hover:bg-paleSky"
          }`}
        >
          All Products
        </a>
        <a
          href="#"
          onClick={() => setFilter("available")}
          className={`p-2 pl-3 pr-3 ml-2 rounded-lg text-xl ${
            filter === "available" ? "bg-paleSky" : "hover:bg-paleSky"
          }`}
        >
          Available Now
        </a>
      </div>
      <div className="flex flex-wrap pl-8 pr-8 justify-center">
        {filteredData.map((data, id) => {
          return (
            <CoffeeCard
              key={id}
              name={data.name}
              image={data.image}
              rating={data.rating}
              price={data.price}
              votes={data.votes}
              available={data.available}
              popular={data.popular}
            />
          );
        })}
      </div>
    </div>
  );
}
