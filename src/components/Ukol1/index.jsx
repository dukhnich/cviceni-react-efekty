import { useEffect } from "react";

// Zadání: Upravte efekt v této komponentě tak, aby se při zobrazení komponenty v konzoli objevil text „Jsem tady“.

export const Ukol1 = () => {
  useEffect(() => {
    console.log('Jsem tady')
  }, []);

  return (
    <>
      <h1>Úkol 1</h1>
      <p>Jsem tady</p>
    </>
  );
};
