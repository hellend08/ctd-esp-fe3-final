import React from "react";
import { useState } from "react";
import Message from "./Message";


const Form = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [descrp, setDescrp] = useState("");

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    
    const handleSubmit = (event) => {
      event.preventDefault();

      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        nombre.length >= 5 && 
        !nombre.startsWith(" ") &&
        regexEmail.test(email) &&
        descrp.length >= 8
      ) {
        setShow(true);
      } else {
        setError(true);
      }
    }

    return (
      <div className="form">
        {show ? <Message nombre={nombre} /> : (
          <form onSubmit={handleSubmit}>
            <h3>Completa el formulario:</h3>
            <div>
                <label>Nombre Completo:</label>
                <input type="text" placeholder="Ingresa tu nombre" onChange={(e) => setNombre( e.target.value )} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" placeholder="Ingresa tu email" onChange={(e) => setEmail( e.target.value )} />
            </div>
            <textarea type="text" placeholder="Ingresa tu consulta aquí..." onChange={(e) => setDescrp( e.target.value )} />
            <button className="btn-submit">Enviar 📩</button>
            {error && (
                  <h4 className="error">
                  Por favor verifique su información nuevamente.
                  </h4>
                )}
          </form>
        )}
      </div>
    );
};

export default Form;
