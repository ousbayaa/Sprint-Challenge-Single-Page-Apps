import React from "react";

export default function CharacterCard(props) {
  return <span key={props.person.id}>
    <h2>{props.person.name}</h2>
    <p>Species: {props.person.species}</p>
  </span>;
}
