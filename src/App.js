import React from "react";
import { PizzaForm } from "./features/pizza/PizzaForm";

import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="App-header">
        <PizzaForm options={["Italian", "American"]} type="style" />
        <PizzaForm
          options={["Standard", "Wholegrain", "Sour dough"]}
          type="dough"
        />
        <PizzaForm
          options={[
            "Cheese",
            "Ham",
            "Mozzarella",
            "Pineapple",
            "Mushrooms",
            "Mais",
            "Onions",
            "Garlic",
            "Pickles",
            "More cheese",
          ]}
          type="toppings"
        />
      </Container>
    </div>
  );
}

export default App;
