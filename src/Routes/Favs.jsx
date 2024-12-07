import React from "react";
import Card from "../Components/Card";
import { useCardStates } from "../Context/Context";

const Favs = () => {

  const { state } = useCardStates();

  return (
    <>
      <h1>Dentistas Destacados</h1>
      <div className="card-grid">
        {state.favs.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default Favs;
