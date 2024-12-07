import React from "react";
import { Link } from "react-router-dom";
import { useCardStates } from "../Context/Context";

const Card = ({ card }) => {
  const { state, dispatch} = useCardStates();

  const addFav = ()=>{

    if (state.favs.some((fav) => fav.id === card.id)) {
      dispatch({type: "REMOVE_FAVS", payload: card});
    } else {
      dispatch({ type: "ADD_FAVS", payload: card });
    }
  }

  const isFav = state.favs.some((fav) => fav.id === card.id);

  return (
    <div className="card">
        <Link to={"/detail/" + card.id}>
          <img src="/images/doctor.jpg" alt="image-user" width="200px" />
          <h3>{card.name}</h3>
          <h5>{card.username} - {card.id}</h5>
        </Link>
        <button onClick={addFav} className={isFav ? "deleteFav" : "addFav"}>{isFav ? "Eliminar 💣" : "Destacar ⭐"}</button>
    </div>
  );
};

export default Card;
