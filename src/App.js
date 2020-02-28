import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomPage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomPage} />
    </main>
  );
}
