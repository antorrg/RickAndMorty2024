import React, { useState, useEffect } from 'react';

const InactivityDetector = ({ children, inactiveTime = 3000 }) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => setInactive(true), inactiveTime); // Inactividad después de inactiveTime milisegundos
    };

    const handleUserActivity = () => {
      if (inactive) {
        setInactive(false);
      }
      resetTimer();
    };

    // Escuchar eventos de interacción del usuario
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);
    window.addEventListener('click', handleUserActivity);

    // Establecer el temporizador inicial
    resetTimer();

    // Limpiar los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      clearTimeout(timer);
    };
  }, [inactive, inactiveTime]);

  return <>{children(inactive)}</>;
};

export default InactivityDetector;
