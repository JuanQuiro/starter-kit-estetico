// App.tsx
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      {/* El resto de tu aplicación aquí */}
      <div className="app-content">
        {!isLoading && <h1>Contenido de tu aplicación</h1>}
      </div>
    </>
  );
};

export default App;
