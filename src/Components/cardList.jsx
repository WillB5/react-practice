import "bootstrap/dist/css/bootstrap.min.css";
//To Do
function Card({ name, id, desc, imageURL }) {
  return (
    <div class="container-sm">
      Card <img src={imageURL} id="ygoimg" />
      <p id="ygoname">{name}</p>
      <p id="ygoid">{id}</p>
      <p id="ygodesc">{desc}</p>
    </div>
  );
}

export default function cardList() {
  const listItems = Card.map((card) => <li>{card}</li>);
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
