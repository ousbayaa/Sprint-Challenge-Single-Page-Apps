import React, {useState} from "react";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";

export default function WelcomePage() {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <section className="welcome-page">
      <SearchForm setState={setSearchTerm} state={searchTerm}/>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <CharacterList searchTerm={searchTerm}/>
    </section>
  );
}
