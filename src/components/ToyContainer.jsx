import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard"
import ToyForm from "./ToyForm"

function ToyContainer({toys, setToys}) {
  return (
      <div id="toy-collection">

        {/* Render the collection of ToyCards */}
        {toys.map((toy) => (
          <ToyCard key={toy.id} toy={toy} setToys={setToys} />
        ))}

      </div>
  );
}

export default ToyContainer;
