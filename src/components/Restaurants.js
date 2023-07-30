import React from "react";
import Restaurant from "./Restaurant";

import { Link } from "react-router-dom";

function Restaurants({ products }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-wrap mx-auto justify-evenly px-8 ">
      {products.map((product) => {
        return (
          <Link
            to={"restaurant/" + product.info.id}
            key={product.info.id}
            onClick={scrollToTop}
          >
            <Restaurant {...product.info} />
          </Link>
        );
      })}
    </div>
  );
}
export default Restaurants;
