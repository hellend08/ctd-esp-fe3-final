import React from 'react'
import { Link } from 'react-router-dom'

const Message = ({nombre}) => {
    return (
        <section>
            <h1>Gracias <span className="color-name">{nombre}</span>, te contactaremos cuando antes vía email.</h1>
            <Link to="/home"><button>🏠</button></Link>
        </section>
    )
}

export default Message