import React, { useState } from 'react';

function Gifs() {
  const [hearts, setHearts] = useState([]); // Estado para los corazones

  const handleYesClick = () => {
    // Crear múltiples corazones
    for (let i = 0; i < 5; i++) {  // Cambia este número para la cantidad de corazones
      const newHeart = { 
        id: Date.now() + i,  // Asegúrate de que cada corazón tenga un ID único
        left: Math.random() * 100 + "%", // Genera una posición aleatoria en el eje X
        animationDuration: Math.random() * (8 - 3) + 3 + 's', // Duración aleatoria de la animación
      };
      setHearts((prevHearts) => [...prevHearts, newHeart]);
    }
  };

  const handleNoClick = () => {
    const buttonNo = document.querySelector('.no');
    buttonNo.classList.add('moving');
    setTimeout(() => {
      buttonNo.classList.remove('moving');
    }, 1000); // Movimiento del botón "No"
  };

  return (
    <section className="Gifs">
      <header>
        <h1>¿Quieres ser mi San Valentín... ?</h1>
      </header>

      <section className="item-gif">
        <img src="src/assets/ositos.gif" alt="Gif animado" />
      </section>

      <footer className="botones">
        <button className="yes" onClick={handleYesClick}>
          Sí
        </button>
        <button className="no" onClick={handleNoClick}>
          No
        </button>
      </footer>

      {/* Corazones que caen */}
      {hearts.map((heart) => (
        <div
          className="heart"
          key={heart.id}
          style={{ 
            left: heart.left, // Posición aleatoria en el eje X
            animationDuration: heart.animationDuration, // Duración aleatoria de la animación
          }}
        >
          ❤️
        </div>
      ))}
    </section>
  );
}

export default Gifs;
