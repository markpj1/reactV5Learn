import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "AdoptMe!"),
  //     React.createElement(Pet, {
  //         name: "reuben",
  //         animal: "Dog",
  //         breed: "Chinese Crested"
  //     }),
  //     React.createElement(Pet, {
  //         name: "Harry",
  //         animal: "Dog",
  //         breed: "Poodle"
  //     }),
  //     React.createElement(Pet, {
  //         name: "Doink",
  //         animal: "Cat",
  //         breed: "Mixed"
  //     })
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Reuben" animal="Dog" breed="Chinese Crested" />
      <Pet name="Harry" animal="Dog" breed="Poodle" />
      <Pet name="Doink" animal="Cat" breed="Stray Cats" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
