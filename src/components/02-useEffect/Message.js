import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  //*****************INICIO useEffect******************

  useEffect(() => {
    const moveMouse = (e) => {
      const coords = { x: e.x, y: e.y };

      setCoords(coords);
    };

    window.addEventListener('mousemove', moveMouse);

    //Cuando se desmonta el efecto
    return () => {
      window.removeEventListener('mousemove', moveMouse);
    };
  }, []);

  //*****************FIN useEffect******************

  return (
    <div>
      <h3>Eres genial</h3>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
};
