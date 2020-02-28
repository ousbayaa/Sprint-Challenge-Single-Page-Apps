import React, {useState} from "react";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";
import styled from "styled-components";

export default function WelcomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const Image = styled.img`
  border: 1px dashed crimson;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  `;

  return (
    <section className="welcome-page">
      <SearchForm setState={setSearchTerm} state={searchTerm}/>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <CharacterList searchTerm={searchTerm}/>
    </section>
  );
}
