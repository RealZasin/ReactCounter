import { Form } from "./komponenter/Form";
import { Teller } from "./komponenter/Teller";

export function App() {
  return (
    <>
      <div>
        <Form />
        <Teller />
      </div>
    </>
  );
}

// Oppgave:
// Denne består av å lage et sett med enkle komponenter som benytter seg av en eller
//annen form for tilstand.
//Dette er det grunnleggendes når det kommer til komponent tilstander.

// Krav:
// En Counter komponent, som kan øke en verdi og tilbakestille den.
// En Form komponent som kaller en funksjon med inneholdet
//(start med å logge til konsollen)

// Stretch Goals:
// En Karusel komponent for bilder eller prosjekter, kombiner den med children properties
// for ekstra creds.
// Lagre bruker info i App komponenten og sett den via Form komponenten du lagde.
