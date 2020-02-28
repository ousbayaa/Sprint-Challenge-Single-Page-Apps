import React, { useState } from "react";

export default function SearchForm(props) {

  const handleChange = event => {
    // console.log(event.target.value)
    props.setState(event.target.value);
  };
  return (
    <section className="search-form">
     <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={props.state}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
