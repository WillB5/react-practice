import "bootstrap/dist/css/bootstrap.min.css";
//To Do
function Card({ name, cardID, desc, imageURL }) {
  return (
    <div class="container-fluid">
      <img src={imageURL} id="ygoimg" class="fs-3" />
      <p id="ygoname" class="fs-3">
        Card Name: {name}
      </p>
      <p id="ygoid" class="fs-3">
        ID: {cardID}
      </p>
      <p id="ygodesc" class="fs-3">
        Description: {desc}
      </p>
    </div>
  );
}

export default function CardList({ card, setPage }) {
  if (card == null || card.data == null) {
    return <p class="fs-3">Invalid card</p>;
  }
  const js = card.data[0];
  console.log(js);
  setPage("home");
  return (
    <div>
      {/* function Card was made to be able to map through an array in the future to display multiple cards. */}
      <Card
        name={js.name}
        cardID={js.id}
        desc={js.desc}
        imageURL={js.card_images[0].image_url_small}
      />
    </div>
  );
}
