import { useEffect, useState } from 'react';

// Krok 1: V tomto úkolu použijeme Harry Potter API: https://hp-api.onrender.com. Dobře si prohlédněte, co vrací endpoint https://hp-api.onrender.com/api/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225

// Krok 2: Vytvořte v této komponentě efekt, který se spustí při prvním zobrazení komponenty. V tomto efektu vytvořte funkci `fetchCharacter`, která pomocí funkce `fetch` stáhne postavu z výše uvedeného endpointu. Objekt s postavou uložte do stavu `postava`.

// Krok 3: Pokud je stav `postava` `null`, nechte zobrazen text `Načítám...`. Pokud je stav `postava` jiný, zobrazte jméno postavy, herce, který postavu hraje a její fotografii.

export const Ukol5 = () => {
  const [postava, setPostava] = useState(null);
  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch('https://hp-api.onrender.com/api/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225');
      const data = await response.json();
      setPostava(data[0]);
    }
    fetchCharacter();
  }, [])
  return (
    <>
      <h1>Úkol 5</h1>
      {
        postava ? (
          <div className="character">
            <img src={postava.image} alt={postava.name} className="character__photo" />
            <h2 className="character__title">{postava.name}</h2>
            <p className='character__actor'>{postava.actor}</p>
          </div>
        ) : (
          <p>Načítám...</p>
        )
      }
      
    </>
  );
};
