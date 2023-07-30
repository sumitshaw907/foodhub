import React, { useState, useEffect } from "react";
import Restaurants from "./Restaurants";
import Restaurant from "./Restaurant";
import Search from "./Search";
import { products } from "../utils/constants";
import Shimmer from "./Shimmer";

export default function Body() {
  const [newProducts, setProducts] = useState(products);
  const [showShimmer, setShowshimmer] = useState(true);

  useEffect(() => {
    getRestuarants();
  }, []);

  async function getRestuarants() {
    setShowshimmer(true);
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5270362&lng=77.13593279999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setProducts(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setShowshimmer(false);
  }

  function setData(newData) {
    setProducts(newData);
  }

  return showShimmer ? (
    <Shimmer />
  ) : (
    <div className="w-[100wh] mt-32">
      <Search products={newProducts} setData={setData} />
      <Restaurants products={newProducts} />
    </div>
  );
}
