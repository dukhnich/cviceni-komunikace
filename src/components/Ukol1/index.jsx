import { useState } from "react";

/*
Zadání: Začneme velmi jednoduše. Zařiďte, aby se po kliknutí na tlačítko zobrazilo jméno, které je
  uvnitř tlačítka. Zatím nejde o žádnou velkou komunikaci mezi komponentami, ale je to základ,
  který budeme dále rozvíjet.
*/

export const Ukol1 = () => {
  const [jmeno, setJmeno] = useState("Jirka");
  const list = ['Jirka', 'Honza', 'Tomáš', 'Šimon'];
  return (
    <>
      <p>
        <strong>{jmeno}</strong>
      </p>
      <div>
        {list.map(name => <button key={name} onClick={() => setJmeno(name)}>{name}</button>)}
      </div>
    </>
  );
};
