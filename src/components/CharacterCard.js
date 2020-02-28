import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  const Name = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  `;

  const Species = styled.p`
  font-size: 19px;
  text-align: center;
  color: dodgerblue;
  `;

  return <span key={props.person.id}>
    <Name>{props.person.name}</Name>
    <Species>Species: {props.person.species}</Species>
  </span>;
}
