import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "AdoptMe!"),
        React.createElement(Pet, {
            name: "reuben",
            animal: "Dog",
            breed: "Chinese Crested"
        }),
        React.createElement(Pet, {
            name: "Harry",
            animal: "Dog",
            breed: "Poodle"
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "Cat",
            breed: "Mixed"
        })
    ]);
};

render(React.createElement(App), document.getElementById("root"));
