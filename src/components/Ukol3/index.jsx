import { useEffect } from "react";
// Zadání: Vytvořte v této komponentě efekt, který pomocí funkce setTimeout po 3 vteřinách v konzoli vypíše text „Jsem tady“.

export const Ukol3 = () => {
  useEffect(() => {
    setTimeout(() => console.log('3000 Jsem tady'), 3000)
  }, [])
  return (
    <>
      <h1>Úkol 3</h1>
      <p>Jsem tady</p>
    </>
  );
};
