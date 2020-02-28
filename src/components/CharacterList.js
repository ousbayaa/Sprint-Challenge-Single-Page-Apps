import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList]= useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response=>{
      // console.log(response);
      setCharList(response.data.results);
      setSearchResults(response.data.results);
    } );
  }, []);

  useEffect(() => {
    // console.log(charList);
    setSearchResults(charList.filter(character =>
      character.name.toLowerCase().includes(props.searchTerm.toLowerCase())));

    console.log(searchResults); 
  }, [props.searchTerm]);
  return (
    <section className="character-list">
      {searchResults.map((person, index) => (
        <CharacterCard person={person}/>
      ))}
      
    </section>
  );
}
