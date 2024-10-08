import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation({
  name,
  setName,
  setNameEntered,
  setPage,
  page,
}) {
  const handleSubmit = (event) => {
    console.log("handleSubmit ran"); //Debugging
    event.preventDefault(); // prevent page refresh
    console.log("name submitted: ", name); //Debugging
    setNameEntered(true);
    console.log("end of handleSubmit"); //Debugging
  };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Yu-Gi-Oh! Card Search
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <button
              class={page == "home" ? "nav-link active" : "nav-link"}
              aria-current="page"
              href="#"
              onClick={(event) => setPage("home")}
            >
              Home
            </button>
            <button
              class={page == "searchpage" ? "nav-link active" : "nav-link"}
              aria-current="page"
              href="#"
              onClick={(event) => setPage("searchpage")}
            >
              Search
            </button>
          </ul>
          <form class="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              id="card_Name"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
