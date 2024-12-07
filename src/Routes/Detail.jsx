import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [card, setCard] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url)
      .then((res) => {
        setCard(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id, url]);

  return (
    <>
      <h1>
        Detalle del dentista <span className="color-name">{card.name}</span>
      </h1>
      <table>
      <tbody>
        <tr>
          <th>
            <h4>Nombre dentista</h4>
          </th>
          <td>
            <h4>{card.name}</h4>
          </td>
        </tr>
        <tr>
          <th>
            <h4>Correo electrónico</h4>
          </th>
          <td>
            <h4>{card.email}</h4>
          </td>
        </tr>
        <tr>
          <th>
            <h4>Teléfono</h4>
          </th>
          <td>
            <h4>{card.phone}</h4>
          </td>
        </tr>
        <tr>
          <th>
            <h4>Página web</h4>
          </th>
          <td>
            <h4>{card.website}</h4>
          </td>
        </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
