import React from "react";
import Herosection from "../components/Herosection";

function page() {
  return (
    <div>
      <Herosection title={"Our Story"} imageUrl={"/about.svg"} />
    </div>
  );
}

export default page;
