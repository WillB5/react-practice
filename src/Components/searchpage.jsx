import React, { Component } from "react";

export default function SearchPage({ name, setName, setNameEntered }) {
  const handleSubmit = (event) => {
    console.log("handleSubmit ran"); //Debugging
    event.preventDefault(); // prevent page refresh
    console.log("name submitted: ", name); //Debugging
    setNameEntered(true);
    console.log("end of handleSubmit"); //Debugging
  };
  return (
    <div>
      <form class="d-flex" role="search" onSubmit={handleSubmit}>
        <label for="card_Name" class="form-label">
          Enter card
        </label>
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
  );
}
