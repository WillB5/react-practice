import { useState } from "react";
import Navigation from "./Components/navbar.jsx";
import { useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [nameEntered, setNameEntered] = useState(false);

  useEffect(() => {
    console.log(nameEntered, "- Has changed");
    console.log("card name: " + name);
    nameEntered ? cardLookUp(name) : console.log("cardEntered: " + nameEntered);
    setNameEntered(false);
  }, [nameEntered]); // <-- here put the parameter to listen, react will re-render component when your state will be changed

  return (
    <div>
      <Navigation
        name={name}
        setName={setName}
        setNameEntered={setNameEntered}
        nameEntered={nameEntered}
      />
      <p>{name}</p>
    </div>
  );
}

function cardLookUp(name, nameEntered, setNameEntered) {
  console.log("cardLookUp started");
  console.log("card name: " + name);
}
