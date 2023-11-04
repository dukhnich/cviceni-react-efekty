import { useState, useEffect } from "react";

// Zadání 1: Vytvořte v této komponentě stav `nacteno`, který bude mít výchozí hodnotu `false`. Dále vytvořte efekt, který po 3 vteřinách nastaví stav `nacteno` na `true`.

// Zadání 2: Pomocí ternárního operátoru zobrazte text `Načítám...` nebo `Hotovo!` podle hodnoty ve stavu `nacteno`.

export const Ukol4 = () => {
  const [nacteno, setNacteno] = useState(false);
  useEffect(() => {
    setTimeout(() => setNacteno(true), 3000)
  }, [])
  return (
    <>
      <h1>Úkol 4</h1>
      <p>{nacteno ? 'Hotovo!' : 'Načítám...'}</p>
    </>
  );
};
