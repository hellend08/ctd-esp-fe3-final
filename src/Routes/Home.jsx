import React from 'react'
import Card from '../Components/Card'
import { useCardStates } from '../Context/Context'

const Home = () => {

  const { state } = useCardStates();

  return (
    <main className="" >
      <h1>Bienvenido a la Clínica Muelitas 🦷</h1>
      <h4>Conoce a nuestros especialistas, un equipo comprometido con tu salud bucal.</h4>
      <div className='card-grid'>
      {state.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      </div>
    </main>
  )
}

export default Home