import { useState } from "react";
import Navigation from "./Components/navbar.jsx";
import { useEffect } from "react";
import CardList from "./Components/cardList.jsx";
import SearchPage from "./Components/searchpage.jsx";

export default function App() {
  const [name, setName] = useState(""); //name submitted by user, constantly being updated, so a bool is used to see when the user decides to submit the name.
  const [nameEntered, setNameEntered] = useState(false); //Bool to see if card name was submitted.
  const [card, setCard] = useState(null); //holds card JSON data
  const [page, setPage] = useState("home");

  useEffect(() => {
    console.log("Name Entered Has changed: " + nameEntered);
    if (nameEntered) {
      console.log("card name: " + name);
      console.log("cardLookUp started");
      fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + name)
        .then((response) => response.json())
        .then((json) => setCard(json))
        .catch((error) => console.error(error));
    }
    setNameEntered(false);
  }, [nameEntered]); // <-- here put the parameter to listen, react will re-render component when your state will be changed

  useEffect(() => {
    console.log("page changed: " + page);
    if (page == "searchpage") {
      setCard(null);
    }
  }, [page]); // <-- here put the parameter to listen, react will re-render component when your state will be changed

  return (
    <div>
      <Navigation
        name={name}
        setName={setName}
        setNameEntered={setNameEntered}
        setPage={setPage}
        page={page}
      />
      {card ? (
        <CardList card={card} setPage={setPage} />
      ) : (
        <p class="fs-3">Enter card name in search bar</p>
      )}

      {page == "searchpage" && (
        <SearchPage
          name={name}
          setName={setName}
          setNameEntered={setNameEntered}
        />
      )}
    </div>
  );
}
//moved function up.
function cardLookUp(name, card, setCard) {
  console.log("cardLookUp started");
  fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + name)
    .then((response) => response.json())
    .then((json) => setCard(json))
    .catch((error) => console.error(error));
  console.log("card info: " + JSON.stringify(card));
}
